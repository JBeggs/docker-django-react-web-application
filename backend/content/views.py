from .models import PageContent, PageGallery
from .serializers import PageContentSerializer, PageGallerySerializer

from rest_framework import permissions, viewsets, filters
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser


class PageContentViewSet(viewsets.ModelViewSet):
    search_fields = ["id", "creator__name", "name", 'title', "name", "desc", "paragraph"]
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    
    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, PageContent.objects.all(), self) 
        serializer = PageContentSerializer(queryset, many=True, context={'request': request})
        
        
class PageGalleryViewSet(viewsets.ModelViewSet):
    search_fields = ["page__id"]
    queryset = PageGallery.objects.all()
    serializer_class = PageGallerySerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]

    def list(self, request):
        filter = filters.SearchFilter()
        queryset = filter.filter_queryset(request, PageGallery.objects.all(), self) 
        serializer = PageGallerySerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
