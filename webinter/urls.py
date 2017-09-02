from django.conf.urls import url
from . import views

app_name = 'webinter'
urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^ajax/(?P<name>\w*)', views.ajax, name='ajax'),
    url(r'^json_ajax/', views.json_ajax, name='json_ajax'),
]
