from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Post
from .forms import PostForm

#@login_required
def get_news(request):
    context = {'posts': Post.objects.all()}
    template_name = 'news/get_last_news.html'
    return render(request, template_name, context)

def write_post(request):
    context = {'form': PostForm}
    template_name = 'news/write_post.html'
    return render(request, template_name, context)

def submit_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
    return redirect('webinter:index')
