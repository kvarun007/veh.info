from django.urls import path
from .views import get_all_cars
from .views import get_all_bikes
from .views import get_all_vehicles
from .views import vehicle_detail
from .views import VehicleSearchSuggestions
from .views import UpdateCarDetailsView
urlpatterns = [
    path("details/getallcars",get_all_cars, name ="get_all_cars"),
    path("details/getallbikes",get_all_bikes, name = "get_all_bikes"),
    path("details/getallvehicles",get_all_vehicles, name = "get_all_vehicles"),
    path('details/<str:vehicle_name>/', vehicle_detail, name='bike_detail'),
    path('api/vehicles/search/', VehicleSearchSuggestions.as_view(), name='vehicle-search'), 
    path('api/update-car-details/', UpdateCarDetailsView.as_view(), name='update-car-details'),
]