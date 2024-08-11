from django.contrib import admin

from .models import PageContent, PageGallery


class PageContentAdmin(admin.ModelAdmin):
    list_display = ("creator", "name", "paragraph_1", 'created_at',)

class PageGalleryAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "image", "thumbnail", 'created_at',)


admin.site.register(PageContent, PageContentAdmin)
admin.site.register(PageGallery, PageGalleryAdmin)