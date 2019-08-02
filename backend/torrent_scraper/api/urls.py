from django.urls import path

from .views import ScraperListView, ScraperDetailView

urlpatterns = [
    path('', ScraperListView.as_view()),
    path('<pk>', ScraperDetailView.as_view()),
]
