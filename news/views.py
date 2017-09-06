from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Post

@login_required
def get_news(request):
    context = {'posts': Posts.objects.all()}
    template_name = 'news/get_last_news.html'
    return render(request, template_name, context)
