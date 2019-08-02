from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

from torrent_scraper.models import Scraper
from .serializers import ScraperSerializer

class ScraperListView(ListAPIView):
    queryset = Scraper.objects.all()
    serializer_class = ScraperSerializer

class ScraperDetailView(RetrieveAPIView):
    queryset = Scraper.objects.all()
    serializer_class = ScraperSerializer

class ScraperCreateView(CreateAPIView):
    queryset = Scraper.objects.all()
    serializer_class = ScraperSerializer

