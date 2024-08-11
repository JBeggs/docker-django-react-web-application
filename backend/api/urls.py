from django.contrib import admin

from django.urls import include, path
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import site_info
from content.views import PageContentViewSet, PageGalleryViewSet

admin.autodiscover()

router = DefaultRouter()
router.register(r'pagecontent', PageContentViewSet)
router.register(r'pagegallery', PageGalleryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path(r'info/',      site_info, name='build'),
]