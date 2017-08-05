from django.conf.urls import url
from . import views
from botFactory.views import IndexView, RegisterView

app_name = 'botFactory'
urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^register/$', RegisterView.as_view(), name='register'),
    # url(r'^register/user_register/$', views.user_register,
    #     name='user_register'),
    url(r'^sign_in/$', IndexView.as_view(), name='sign_in'),
    url(r'^logout/$', views.user_logout, name='sign_in'),
    url(r'^add_new_bot/$', views.add_new_bot, name='add_new_bot'),
    url(r'^del_bot/$', views.del_bot, name='del_bot'),
]
