from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import IndiaCarDatabaseByTeoalidaFullSpecsSample
from .models import IndiaBikeDatabase
from .models import UserDatabase
from django.shortcuts import get_object_or_404
import json
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VehicleSerializer
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# get_all_cars function return all the cars used for the index pages 
def get_all_cars(request):
    cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.values('make', 'model', 'image_url', 'price').exclude(model__regex=r'\[\d{4}-\d{4}\]')
    
    # Dictionary to store the lowest price for each unique combination of make, model, and image_url
    lowest_price_cars = {}

    for car in cars:
        key = (car['make'], car['model'])  # Unique key for each combination
        price = float(car['price'].replace("?","").replace("Lakh","").strip())

        # If the key is not in the dictionary or the current price is lower, update the dictionary
        if key not in lowest_price_cars or price < float(lowest_price_cars[key]['price'].replace("Lakh","").strip()):
            
            print(f"{key} - {price}")
            
            lowest_price_cars[key] = {
                'make': car['make'],
                'model': car['model'],
                'image_url': car['image_url'],
                'price': str(price) + " Lakh" 
            }

    # Convert the dictionary values to a list
    cars_data = list(lowest_price_cars.values())

    return JsonResponse({'cars': cars_data})

#get_all_cars_brands fucntion retruns the all brand names of the cars 
def get_all_cars_brands(request):
    cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.values('make').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    cars_data = []
    for car in cars:
        cars_data.append({
            'make' : car['make']
        })
    return JsonResponse({'cars': cars_data})


#get_all_bikes_brands fucntion retruns the all brand names of the bikes 
def get_all_bikes_brands(request):
    bikes = IndiaBikeDatabase.objects.values('make').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    bikes_data = []
    for bike in bikes:
        bikes_data.append({
            'make' : bike['make']
        })
    return JsonResponse({'bikes': bikes_data})

#get_all_cars_models fucntion retruns the all models of the cars using brand name  
@api_view(["GET"])
def get_cars_model(request):
    print("model")
    brand = request.GET.get("brand")
    cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(make__icontains=brand) \
        .values('model').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    cars_data = []
    for car in cars:
        cars_data.append({
            'model' : car['model']
        })
    return JsonResponse({'cars': cars_data})

#get_all_bikes_models fucntion retruns the all models of the bikes using brand name  
@api_view(["GET"])
def get_bikes_model(request):
    brand = request.GET.get("brand")
    bikes = IndiaBikeDatabase.objects.filter(make__icontains=brand) \
        .values('model').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    bikes_data = []
    for bike in bikes:
        bikes_data.append({
            'model' : bike['model']
        })
    return JsonResponse({'bikes': bikes_data})


#get_all_cars_versions fucntion retruns the all versions of the cars using brand name  and model  
@api_view(["GET"])
def get_cars_versions(request):
    
    brand = request.GET.get("brand")
    model = request.GET.get("model")
    print(model)
    cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(make__exact=brand,model__exact = model) \
        .values('version').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    cars_data = []
    for car in cars:
        cars_data.append({
            'version' : car['version']
        })
    print (cars_data)
    return JsonResponse({'cars': cars_data})


#get_all_bikes_versions fucntion retruns the all versions of the cars using brand name  and model  
@api_view(["GET"])
def get_bikes_versions(request):
    brand = request.GET.get("brand")
    model = request.GET.get("model")
    bikes = IndiaBikeDatabase.objects.filter(make__exact=brand,model__exact = model) \
        .values('version').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
    bikes_data = []
    for bike in bikes:
        bikes_data.append({
            'version' : bike['version']
        })
    return JsonResponse({'bikes': bikes_data})

# def get_all_cars_details(request):
#     cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.values('make', 'model', "image_url","version").exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()
    
#     cars_data = []
#     for car in cars:
#         cars_data.append({
#             'make' : car['make'],
#             'model' : car['model'],
#             'version' : car["version"],
#             "image_url":car['image_url']
#         })
#     return JsonResponse({'cars': cars_data})




def get_all_vehicles (request):
    car_response = get_all_cars(request)
    bike_response = get_all_bikes(request)

    cars_data = json.loads(car_response.content)["cars"]
    bikes_data = json.loads(bike_response.content)["bikes"]
    
    return JsonResponse({'vehicles': cars_data + bikes_data})



def get_all_bikes(request):
    # return HttpResponse("dispalying all bikes ")
    bikes = IndiaBikeDatabase.objects.values('make', 'model', 'image_url', 'mumbai').distinct()
    
     # Dictionary to store the lowest price for each unique combination of make, model, and image_url
    lowest_price_bikes = {}

    for bike in bikes:
        key = (bike['make'], bike['model'])  # Unique key for each combination
        price = bike['mumbai'].replace("â‚¹ ","").replace("onwards","").strip()
        # price = bike["mumbai"]

        # If the key is not in the dictionary or the current price is lower, update the dictionary
        if key not in lowest_price_bikes or float(price.replace(',', '')) < float(lowest_price_bikes[key]['price'].replace(',', '')):
            
            print(f"{key} - {price}")
            
            lowest_price_bikes[key] = {
                'make': bike['make'],
                'model': bike['model'],
                'image_url': bike['image_url'],
                'price': price
            }

    # Convert the dictionary values to a list
    bikes_data = list(lowest_price_bikes.values())

    return JsonResponse({'bikes': bikes_data})

@csrf_exempt  # Disable CSRF for testing purposes (not recommended for production)
# @api_view(["POST"])
def add_mileage(request):
    print("entered into add_mileage block")
    if request.method == "POST":
        try:
            # Parse JSON body
            data = json.loads(request.body)
            
            # Extract required fields
            vehicleType = data.get("vehicleType")
            brand = data.get("brand")
            model = data.get("model")
            version = data.get("version")
            mileage = data.get("mileage")
            email = data.get("email")
            print(email)

            # Log the received data
            print(f"Received Data - vehicleType : {vehicleType}, Brand: {brand}, Model: {model}, Version: {version}, Mileage: {mileage}, Email: {email}")
            if vehicleType == "car":
                model = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(make__icontains=brand,model__icontains = model,version__icontains = version).values()
                current_mileage = model[0]["user_mileage"]
                no_of_user_mileage_entries = model[0]["no_of_user_mileage_entries"]
                
                if current_mileage is None :
                    updated_mileage =  int(mileage)
                    print(f"updated mileage - {updated_mileage}")
                else:
                    
                    updated_mileage = ((current_mileage * no_of_user_mileage_entries) + int(mileage))/(no_of_user_mileage_entries + 1)
                    print(f"updated mileage - {updated_mileage}")
                
                vehicles = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(key_transmission__icontains=model[0]["key_transmission"],engine__icontains =model[0]["engine"])
                vehicles.update(user_mileage = updated_mileage,no_of_user_mileage_entries = no_of_user_mileage_entries + 1)
                print(data.get("model"))
                UserDatabase(usergmail=email, vehicletype="Car", id=f"{brand}-{data.get("model")}-{version}",user_mileage =mileage).save()
                
            if vehicleType == "bike":
                model = IndiaBikeDatabase.objects.filter(make__icontains=brand,model__icontains = model,version__icontains = version).values()
                current_mileage = model[0]["user_mileage"]
                no_of_user_mileage_entries = model[0]["no_of_user_mileage_entries"]
                
                
                if current_mileage is None :
                    updated_mileage =  int(mileage)
                    print(f"updated mileage - {updated_mileage}")
                else:
                    
                    updated_mileage = ((current_mileage * no_of_user_mileage_entries) + int(mileage))/(no_of_user_mileage_entries + 1)
                    print(f"updated mileage - {updated_mileage}")
                vehicle = IndiaBikeDatabase.objects.filter(id__icontains = model[0]["id"]).update(user_mileage = updated_mileage,no_of_user_mileage_entries = no_of_user_mileage_entries + 1)
                UserDatabase(usergmail=email, vehicletype="bike", id=f"{brand}-{data.get("model")}-{version}",user_mileage =mileage).save()

            # Respond with success
            return JsonResponse({"message": "Mileage added successfully!"}, status=200)
        
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
    
    return JsonResponse({"error": "Invalid request method"}, status=405)


# def get_all_cars(request):
#     # return HttpResponse("dispalying all cars ")
#     cars = Vehicles.objects.filter(vehicleType="car")
#     cars_data = []
#     for car in cars:
#         cars_data.append({
#             'vehicleType' : car.vehicleType,
#             'vehicleName': car.vehicleName,
#             'frontTyrePressure': car.frontTyrePressure,
#             'backTyrePressure': car.backTyrePressure,
#             'frontTyreSize': car.frontTyreSize,
#             'backTyreSize': car.backTyreSize,
#             'vehicleImage': car.VehicleImage.url if car.VehicleImage else None,
#         })
#     return JsonResponse({'cars': cars_data})


class VehicleSearchSuggestions(APIView):
    def get(self, request):
        query = request.GET.get('q', '').strip()
        if query:
            # Search for vehicles with vehicle_name containing the query (case insensitive)
            cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(Q(make__icontains=query) | Q(model__icontains=query)).values('make', 'model').exclude(model__regex=r'\[\d{4}-\d{4}\]').distinct()[:10 ]  # Limit to 10 results
            bikes = IndiaBikeDatabase.objects.filter(Q(make__icontains=query) | Q(model__icontains=query)).values('make', 'model').distinct()[:10 ]
            
            vehicles = [*cars, *bikes]
            print(vehicles)
            serializer = VehicleSerializer(vehicles, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"suggestions": []}, status=status.HTTP_200_OK)
        # return JsonResponse({"suggestions": []}, status=status.HTTP_200_OK)
        
        
def vehicle_detail(request,vehicle_name):
    cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(model = vehicle_name).values()
    bikes = IndiaBikeDatabase.objects.filter(model = vehicle_name).values()
    vehicles = [*cars, *bikes]
    # print(vehicles)
    return JsonResponse({'vehicle': vehicles})

@api_view(["GET"])
def get_MyGarage_Vehicle(request):
    query = request.GET.get("gmail")
    # print(f"gmail- {query}")
    garage_cars_id = list(UserDatabase.objects.filter(usergmail = query,vehicletype ='Car').values("id"))
    garage_bikes_id = UserDatabase.objects.filter(usergmail = query,vehicletype ='bike').values("id")
    # print(garage_cars)
    
    garage_cars_id_array  = []
    for x in garage_cars_id:
        garage_cars_id_array.append(x["id"])
    
    garage_bikes_id_array  = []
    for x in garage_bikes_id:
        garage_bikes_id_array.append(x["id"])
        
    print(garage_cars_id_array)
    print(garage_bikes_id_array)
        
    garage_cars = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.filter(id__in =garage_cars_id_array).values()
    # print(garage_cars)
    
    garage_bikes = IndiaBikeDatabase.objects.filter(id__in =garage_bikes_id_array).values()
    # print(garage_bikes)

    return JsonResponse({"cars" : list(garage_cars), "bikes" : list(garage_bikes)})




class UpdateCarDetailsView(APIView):
    def post(self, request):
        # Extract data from the request
        # print("cameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        vin_number = request.data.get("vin_number")
        user_predicted_mileage = request.data.get("user_predicted_mileage")
        car_version = request.data.get("car_version")  # Assuming you use the ID to identify the car
        car_model = request.data.get("car_model")
        # print(vin_number)
        # print(user_predicted_mileage)
        # print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

        # Validate input data
        if not car_version:
            return Response({"error": "Car ID is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if not vin_number and not user_predicted_mileage:
            return Response({"error": "At least one field (vin_number or user_predicted_mileage) must be provided."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Fetch the car record
            car = IndiaCarDatabaseByTeoalidaFullSpecsSample.objects.get(version=car_version, model=car_model)

            # Update fields
            if vin_number is not None:
                car.vin_numbers = vin_number

            if user_predicted_mileage is not None:
                car.user_predicted_mileage = user_predicted_mileage

            # Save changes
            car.save()

            return Response({"message": "Car details updated successfully."}, status=status.HTTP_200_OK)
        
        except IndiaCarDatabaseByTeoalidaFullSpecsSample.DoesNotExist:
            return Response({"error": "Car record not found."}, status=status.HTTP_404_NOT_FOUND)

