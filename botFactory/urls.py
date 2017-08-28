from django.conf.urls import url

from . import views

app_name = 'botFactory'
urlpatterns = [
    url(
    	r'^$',
    	views.IndexView.as_view(),
    	name='index'
    ),
    url(
    	r'^register/$',
    	views.RegisterView.as_view(),
    	name='register'
    ),
    url(
    	r'^sign_in/$',
    	views.IndexView.as_view(),
    	name='sign_in'
    ),
    url(
    	r'^logout/$',
    	views.user_logout,
    	name='sign_in'
    ),
    url(r'^add_new_bot/$', 
        views.add_new_bot, 
        name='add_new_bot'
    ),
    url(
        r'^bot/$', 
        views.bot, 
        name='bot'
    ),
    url(
        r'^bot/run$', 
        views.bot_run, 
        name='bot_run'
    ),
    # url(r'^del_bot/$', IndexView.del_bot, name='del_bot'),
]
