from django.middleware.csrf import get_token 
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from content.models import PageContent, PageGallery, Articles, ArticleGallery


# Create your views here.
@csrf_exempt
def site_info(request, *args, **kwargs):
    home = list(PageContent.objects.filter(page="home").values())
    home_gallery = list(PageGallery.objects.filter(page__page="home").values())
    about = list(PageContent.objects.filter(page="about").values())
    about_gallery = list(PageGallery.objects.filter(page__page="about").values())
    articlepage = list(PageContent.objects.filter(page="article").values())
    article_gallery = list(PageGallery.objects.filter(page__page="article").values())
    
    articles = list(Articles.objects.filter(active=True).values())

    return JsonResponse(
        {
            "csrf_token": get_token(request),
            "home": home,
            "home_gallery": home_gallery,
            "about": about,
            "about_gallery": about_gallery,
            "articlepage": articlepage,
            "article_gallery": article_gallery,
            "articles" : articles
        }
    )