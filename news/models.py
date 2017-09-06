from django.db import models
import datetime

class PostManager(models.Manager):
    def todays_posts(self):
        return self.filter(date__gte=datetime.date.today())

class Post(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=255)
    date = models.DateField()

    objects = PostManager()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.date = datetime.datetime.now()
