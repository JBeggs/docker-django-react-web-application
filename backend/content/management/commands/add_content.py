from django.template.defaultfilters import slugify
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from django.contrib.sites.models import Site
from content.models import PageContent, Articles
import lorem

User = get_user_model()


class Command(BaseCommand):
    help = "Add ipsum lorem to the Content Pages, Home and About"

    def handle(self, *args, **options):
        
        pages = ['home', 'about', "article"]

        site = Site()
        site.name = "R & J"
        site.domain = "react-djangoj.com"
        site.save()

        for page in pages:
            content = PageContent()
            content.creator = User.objects.get(username="admin")
            content.name = page.title()
            content.page = page
            content.title = "Welcome to Django React"
            content.title_description = lorem.sentence()
            content.paragraph_1 = lorem.paragraph()
            content.paragraph_2 = lorem.paragraph()
            content.paragraph_3 = lorem.paragraph()
            content.paragraph_4 = lorem.paragraph()
            content.paragraph_5 = lorem.paragraph()
            content.active = True
            content.save()


        articles = ['First one', 'This is how its done']

        for _article in articles:
            
            article = Articles()
            article.creator = User.objects.get(username="admin")
            article.name = _article.title()
            article.title = lorem.text()[:25]
            article.slug = slugify(article.title)
            article.title_description = lorem.sentence()
            article.paragraph_1 = lorem.paragraph()
            article.paragraph_2 = lorem.paragraph()
            article.paragraph_3 = lorem.paragraph()
            article.paragraph_4 = lorem.paragraph()
            article.paragraph_5 = lorem.paragraph()
            article.paragraph_6 = lorem.paragraph()
            article.paragraph_7 = lorem.paragraph()
            article.header_1 = lorem.text()[:25]
            article.header_2 = lorem.text()[:25]
            article.header_3 = lorem.text()[:25]
            article.header_4 = lorem.text()[:25]
            article.header_5 = lorem.text()[:25]
            
            article.active = True
            article.save()
