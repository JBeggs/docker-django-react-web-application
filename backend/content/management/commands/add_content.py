from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from content.models import PageContent, Articles
import lorem

User = get_user_model()


class Command(BaseCommand):
    help = "Add ipsum lorem to the Content Pages, Home and About"

    def handle(self, *args, **options):
        
        pages = ['home', 'about']

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

        for article in articles:
            article = Articles()
            article.creator = User.objects.get(username="admin")
            article.name = page.title()
            article.title = "Welcome to Django React"
            article.title_description = lorem.sentence()
            article.paragraph_1 = lorem.paragraph()
            article.paragraph_2 = lorem.paragraph()
            article.paragraph_3 = lorem.paragraph()
            article.paragraph_4 = lorem.paragraph()
            article.paragraph_5 = lorem.paragraph()
            article.active = True
            article.save()
