from django.db import models


class Scraper(models.Model):
    title = models.CharField(max_length=120)
    magnet_link = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title
