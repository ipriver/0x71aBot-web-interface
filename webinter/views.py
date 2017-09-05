from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.contrib.auth import logout

class IndexView(TemplateView):
    template_name = 'index.html'

def logout_view(request):
    logout(request)
    return redirect('/')
