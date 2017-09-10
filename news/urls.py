from django.conf.urls import url
from . import views

app_name = 'news'
urlpatterns = [
    url(r'^$', views.get_news, name='get_news'),
    url(r'post/(?P<post_id>[0-9]+)/$', views.view_post, name='view_post'),
    url(r'post/(?P<post_id>[0-9]+)/delete/$', views.delete_post, name='delete_post'),
    url(r'post/(?P<post_id>[0-9]+)/edit/$', views.edit_post, name='edit_post'),
    url(r'^new_post/$', views.write_post, name='new_post'),
    url(r'^new_post/submit_post/$', views.submit_post, name='submit_post'),
]
