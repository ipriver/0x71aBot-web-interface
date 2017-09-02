from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_protect
import json
import datetime
import random

class IndexView(TemplateView):
    template_name = 'index.html'

class Person:
    def __init__(self, **kwargs):
        self.name = kwargs['name'] + '!!!'
        self.age = self.modify_age(kwargs['age'])
        #self.date = self.cr_date()

    def modify_age(self, age):
        new_age = random.randint(1,100)
        return new_age

    def cr_date(self):
        return datetime.datetime.now()
    #def __str__(self):
    #    return 'myobject: {} and {} date: {}'.format(self.name, self.age, self.date)

def ajax(request, name=None):
    print(name)
    if request.method == 'POST' and request.is_ajax():
        return HttpResponse('{} {} your name and password'.format(request.POST.get('name'), request.POST.get('password')))
    name = request.GET.get('name', '')
    if request.is_ajax():

        return HttpResponse('{} name'.format(name))
    return HttpResponse('{} your name'.format(name))

def json_ajax(request):
    if request.method == 'POST' and request.is_ajax():
        data = json.loads(request.body)
        print(data)
        for key in data:
            print('key: {}, data: {}'.format(key, data[key]))
        pj = Person(**data)
        print(pj)
        print(json.dumps(pj.__dict__))
        return HttpResponse(json.dumps(pj.__dict__))
