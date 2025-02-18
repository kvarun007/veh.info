from django.urls import path
from .views import get_all_cars
from .views import get_all_bikes
from .views import get_all_vehicles
from .views import vehicle_detail
from .views import VehicleSearchSuggestions
from .views import UpdateCarDetailsView
from .views import get_all_cars_brands
from .views import get_all_bikes_brands
from .views import get_cars_model
from .views import get_bikes_model
from .views import get_cars_versions
from .views import get_bikes_versions
from .views import add_mileage
from .views import get_MyGarage_Vehicle
from .views import del_vehicle_from_garage



urlpatterns = [
    path("details/getallcars",get_all_cars, name ="get_all_cars"), #TO get all car details 
    path("details/getallbikes",get_all_bikes, name = "get_all_bikes"),# To get all bike details 
    
    path("details/getallcarsdetails",get_all_cars_brands, name ="get_all_cars"), # To get all car brand names
    path("details/getallbikesbrands",get_all_bikes_brands, name ="get_all_bikes_brands"),# To get all bike brand names 
    
    path("car/modeldetails/", get_cars_model, name="get_cars_model"),# To get all car model using brand names
    path("bike/modeldetails/",get_bikes_model, name ="get_bikes_model"),# To get all bike models using  brand names
    
    path("car/versiondetails/", get_cars_versions, name="get_cars_versions"),# To get all car versions using brand names and models
    path("bike/versiondetails/",get_bikes_versions, name ="get_bikes_versions"),# To get all bike versions using  brand names and models
    
    path("api/vehicles/add-mileage/",add_mileage, name = "add_mileage"),
    
    path("api/mygarage",get_MyGarage_Vehicle, name = "get_MyGarage_Vehicle"), #To fetch all the vehicles from the gargae 
    
    path("api/deltevehiclefromgarage",del_vehicle_from_garage, name = "del_vehicle_from_garage"), 

    path("details/getallvehicles",get_all_vehicles, name = "get_all_vehicles"),
    path('details/<str:vehicle_name>/', vehicle_detail, name='bike_detail'),
    path('api/vehicles/search/', VehicleSearchSuggestions.as_view(), name='vehicle-search'), 
    path('api/update-car-details/', UpdateCarDetailsView.as_view(), name='update-car-details'),
]