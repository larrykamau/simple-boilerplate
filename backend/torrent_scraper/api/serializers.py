from rest_framework import serializers

from torrent_scraper.models import Scraper

class ScraperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scraper
        fields = ('title', 'magnet_link', 'content')
