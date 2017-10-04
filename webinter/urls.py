from django.conf.urls import url
from . import views
from django.views.decorators.cache import cache_page

app_name = 'webinter'
urlpatterns = [
    url(r'^$',  views.IndexView.as_view(), name='index'),
    url(r'^logout/$', views.logout_view, name='logout'),
]
