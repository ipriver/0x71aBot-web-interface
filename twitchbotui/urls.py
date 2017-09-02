from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('webinter.urls')),
    url(r'^controlpanel/', include('controlpanel.urls')),
    url(r'^admin/', admin.site.urls),
]
