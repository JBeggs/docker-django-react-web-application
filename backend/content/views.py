from .models import PageContent, PageGallery, Articles, ArticleGallery
from .serializers import PageContentSerializer, PageGallerySerializer, ArticleSerializer, ArticleGallerySerializer

from rest_framework import permissions, viewsets, filters
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response


class PageContentViewSet(viewsets.ModelViewSet):
    search_fields = ["id", "creator__name", "name", 'title', "name", "desc"]
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = []
    
    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, PageContent.objects.all(), self) 
        serializer = PageContentSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
        
class PageGalleryViewSet(viewsets.ModelViewSet):
    search_fields = ["page__id"]
    queryset = PageGallery.objects.all()
    serializer_class = PageGallerySerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = []

    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, PageGallery.objects.all(), self) 
        serializer = PageGallerySerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)


class ArticlesViewSet(viewsets.ModelViewSet):
    search_fields = ["id", "creator__username", 'title', "name", "title_description"]
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = []
    
    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, Articles.objects.all(), self) 
        serializer = ArticleSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)


class ArticleGalleryViewSet(viewsets.ModelViewSet):
    search_fields = ["article__id"]
    queryset = ArticleGallery.objects.all()
    serializer_class = ArticleGallerySerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = []

    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, ArticleGallery.objects.all(), self) 
        serializer = ArticleGallerySerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)