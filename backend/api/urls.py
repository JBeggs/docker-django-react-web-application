from django.contrib import admin

from django.urls import include, path
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import site_info
from content.views import PageContentViewSet, PageGalleryViewSet, ArticlesViewSet, ArticleGalleryViewSet

admin.autodiscover()

router = DefaultRouter()
router.register(r'update/page', PageContentViewSet)
router.register(r'update/pagegallery', PageGalleryViewSet)
router.register(r'update/article', ArticlesViewSet)
router.register(r'update/articlegallery', ArticleGalleryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path(r'info/',      site_info, name='build'),
    # path(r'update/page/',      site_info, name='build'),
]