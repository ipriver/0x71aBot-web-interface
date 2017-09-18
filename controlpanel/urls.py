from django.conf.urls import url
from . import views

app_name = 'controlpanel'
urlpatterns = [
    url(r'^start/$', views.start_bot, name='start_bot'),
]
