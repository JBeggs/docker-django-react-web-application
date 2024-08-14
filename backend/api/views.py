from django.middleware.csrf import get_token 
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from content.models import PageContent, PageGallery


# Create your views here.
@csrf_exempt
def site_info(request, *args, **kwargs):
    home = list(PageContent.objects.filter(page="home").values())
    home_gallery = list(PageGallery.objects.filter(page__page="home").values())
    about = list(PageContent.objects.filter(page="about").values())
    about_gallery = list(PageGallery.objects.filter(page__page="about").values())
    return JsonResponse(
        {
            'csrf_token': get_token(request),
            'home':home,
            'home_gallery':home_gallery,
            'about':about,
            'about_gallery':about_gallery,
        }
    )