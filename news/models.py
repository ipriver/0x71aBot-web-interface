from django.db import models
from django.utils import timezone

class PostManager(models.Manager):

    def todays_posts(self):
        return self.filter(date__gte=timezone.now().today().date())

    def five_last(self):
        return self.all()

class Post(models.Model):
    title = models.CharField(max_length=50)
    message = models.CharField(max_length=255)
    post_date = models.DateTimeField(default=timezone.now)

    objects = PostManager()

    def __repr__(self):
        return self.title

    class Meta:
        ordering = ['-post_date']
