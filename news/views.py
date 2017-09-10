from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Post
from .forms import PostForm
from django.shortcuts import get_object_or_404
from django.http import Http404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def admin_required(func):
    def decorator(request, *args, **kwargs):
        if request.user.is_superuser:
            return func(request, *args, **kwargs)
        else:
            raise Http404("Not enough permissions to visit this page")
    return decorator

@login_required
@admin_required
def get_news(request):
    posts_list = Post.objects.all()
    paginator = Paginator(posts_list, 12)
    page = request.GET.get('page')
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    context = {'posts': posts}
    template_name = 'news/get_all_news.html'
    return render(request, template_name, context)

@login_required
@admin_required
def write_post(request):
    context = {'form': PostForm}
    template_name = 'news/write_post.html'
    return render(request, template_name, context)

@login_required
@admin_required
def submit_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
    return redirect('news:get_news')

@login_required
@admin_required
def delete_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.delete()
    if request.is_ajax():
        return HttpResponse('good')
    return redirect('news:get_news')

@login_required
@admin_required
def view_post(request, post_id):
    template_name = 'news/view_post.html'
    post = get_object_or_404(Post, pk=post_id)
    context = {'post': post, 'form': PostForm}
    return render(request, template_name, context)

@login_required
@admin_required
def edit_post(request, post_id):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = get_object_or_404(Post, pk=post_id)
            post.title = request.POST.get('title',)
            post.message = request.POST.get('message', )
            post.save()
    return redirect('news:get_news')

def get_last_five_news():
    return Post.objects.five_last()

