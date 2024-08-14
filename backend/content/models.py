from django.contrib.auth import get_user_model
from django.db import models
from django.template.defaultfilters import truncatechars
from django.utils.safestring import mark_safe
from django.utils.translation import gettext as _

from .utils import create_thumbnail, image_thumbnail_path, page_file_path, page_image_path

User = get_user_model()


class PageContent(models.Model):

    creator = models.ForeignKey(
        User, related_name="page_creator", on_delete=models.CASCADE)

    PAGE_CHOICES = [
        ('home', 'Home'),
        ('about', 'About'),
        ('contact', 'Contact'),
        ('blog', 'Blog'),
        # add more options here
    ]
    name = models.CharField(max_length=200, blank=True, null=True)
    page = models.CharField(max_length=200, choices=PAGE_CHOICES, blank=True)
    title = models.CharField(max_length=200, blank=True)
    title_description = models.TextField(_('Title Description'), blank=True)
    hero_image = models.ImageField(upload_to=page_image_path, blank=True, max_length=300)
    paragraph_1 = models.TextField(_('paragraph'), blank=True)
    paragraph_2 = models.TextField(_('paragraph'), blank=True)
    paragraph_3 = models.TextField(_('paragraph'), blank=True)
    paragraph_4 = models.TextField(_('paragraph'), blank=True)
    paragraph_5 = models.TextField(_('paragraph'), blank=True)
    
    file = models.FileField(upload_to=page_file_path, blank=True, null=True)
    active     = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return f"{self.name}"


class PageGallery(models.Model):
    page = models.ForeignKey(
        PageContent, related_name="page_gallery", on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to=page_image_path, blank=True, max_length=300)
    description = models.CharField(max_length=200, blank=True)
    thumbnail = models.ImageField(upload_to=image_thumbnail_path, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return f"{self.name}"

    def save(self):
        create_thumbnail(self.image, self.thumbnail, 200, 200)
        super(PageGallery, self).save()

    @property
    def short_description(self):
        return truncatechars(self.description, 60)

    def image_tag(self):
        from django.utils.html import escape
        try:
            return mark_safe(u'<img src="%s" />' % escape(self.thumbnail.url))
        except:
            try:
                return mark_safe(u'<img style="height:200px;" src="%s" />' % escape(self.image.url))
            except:
                return ''


class Articles(models.Model):

    creator = models.ForeignKey(
        User, related_name="article_creator", on_delete=models.CASCADE)

    name = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200, blank=True)
    title_description = models.TextField(_('Title Description'), blank=True)
    hero_image = models.ImageField(upload_to=page_image_path, blank=True, max_length=300)

    paragraph_1 = models.TextField(_('paragraph'), blank=True)
    paragraph_2 = models.TextField(_('paragraph'), blank=True)
    paragraph_3 = models.TextField(_('paragraph'), blank=True)
    paragraph_4 = models.TextField(_('paragraph'), blank=True)
    paragraph_5 = models.TextField(_('paragraph'), blank=True)
    
    file = models.FileField(upload_to=page_file_path, blank=True, null=True)
    active     = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return f"{self.name}"


class ArticleGallery(models.Model):
    article = models.ForeignKey(
        Articles, related_name="article_gallery", on_delete=models.CASCADE)
    
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to=page_image_path, blank=True, max_length=300)
    description = models.CharField(max_length=200, blank=True)
    thumbnail = models.ImageField(upload_to=image_thumbnail_path, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ('-created_at', )

    def __str__(self):
        return f"{self.name}"

    def save(self):
        create_thumbnail(self.image, self.thumbnail, 200, 200)
        super(PageGallery, self).save()

    @property
    def short_description(self):
        return truncatechars(self.description, 60)
