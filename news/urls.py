from django.conf.urls import url
from . import views

app_name = 'news'
urlpatterns = [
    url(r'^$', views.get_news, name='get_news'),
    url(r'^new_post/$', views.write_post, name='new_post'),
    url(r'^new_post/submit_post/$', views.submit_post, name='submit_post'),
]
