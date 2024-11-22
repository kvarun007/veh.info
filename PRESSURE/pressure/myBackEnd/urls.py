from django.urls import path
from .views import get_all_vehicels, bike_detail, get_all_bikes, get_all_cars, VehicleSearchSuggestions

urlpatterns = [
    path("details/getallvehicels",get_all_vehicels, name ="get_all_vehicels"),
    path("details/getallbikes",get_all_bikes, name = "get_all_bikes"),
    path("details/getallcars",get_all_cars, name = "get_all_cars"),
    path('bike/<str:bike_name>/', bike_detail, name='bike_detail'),
    path('api/vehicles/search/', VehicleSearchSuggestions.as_view(), name='vehicle-search'), 
]