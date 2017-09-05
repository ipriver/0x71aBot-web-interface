from django.db import models

class News(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=255)
    date = models.models.DateField()
