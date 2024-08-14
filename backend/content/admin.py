from django.contrib import admin

from .models import PageContent, PageGallery, Articles, ArticleGallery


class PageContentAdmin(admin.ModelAdmin):
    list_display = ("creator", "name", "title", 'created_at',)

class PageGalleryAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "image", "thumbnail", 'created_at',)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ("creator", "name", "title", 'created_at',)
    prepopulated_fields = {"slug": ["title"]}

class ArticleGalleryAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "image", "thumbnail", 'created_at',)


admin.site.register(PageContent, PageContentAdmin)
admin.site.register(PageGallery, PageGalleryAdmin)

admin.site.register(Articles, ArticleAdmin)
admin.site.register(ArticleGallery, ArticleGalleryAdmin)