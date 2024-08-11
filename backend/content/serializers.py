from django.contrib.auth import get_user_model
from rest_framework import serializers

from content.utils import create_thumbnail
from content.models import PageContent, PageGallery


User = get_user_model()



class PageContentSerializer(serializers.ModelSerializer):
    
    creator = serializers.SlugRelatedField('username', queryset=User.objects.all())
    
    class Meta:
        model = PageContent
        fields = ['creator', 'name', 'page', 'title', 'title_description', 'paragraph_1', 'paragraph_2', 'paragraph_3', 'paragraph_4', 'paragraph_5', 'file', 'created_at', 'updated_at', 'active']

    def create(self, validated_data):

        content = PageContent()
        content.creator = validated_data.get('creator')
        content.name = validated_data.get('name')
        content.page = validated_data.get('page')
        content.title = validated_data.get('title')
        content.title_description = validated_data.get('title_description')
        content.paragraph_1 = validated_data.get('paragraph_1')
        content.paragraph_2 = validated_data.get('paragraph_2')
        content.paragraph_3 = validated_data.get('paragraph_3')
        content.paragraph_4 = validated_data.get('paragraph_4')
        content.paragraph_5 = validated_data.get('paragraph_5')

        content.active = validated_data.get('active')
        content.save()
        
        content.file = validated_data.get('file')
        content.save()
        
        return content

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
    
    
class PageGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PageGallery
        fields = ['page', 'name', 'image', 'description', 'thumbnail']

    def create(self, validated_data):

        image = validated_data.get('image')
        thumbnail = validated_data.get('thumbnail')

        gallery = PageGallery()
        gallery.product = validated_data.get('product')
        gallery.name = validated_data.get('name')

        gallery.image = image
        gallery.description = validated_data.get('description')
        gallery.thumbnail = thumbnail
        create_thumbnail(gallery.image, gallery.thumbnail, 400, 400)
        gallery.save()
        
        return gallery
    
    def update(self, instance, validated_data):
        image = validated_data.get('image', instance.image)
        thumbnail = validated_data.get('thumbnail', instance.thumbnail)
        create_thumbnail(image, thumbnail, 400, 400)
        return super().update(instance, validated_data)
