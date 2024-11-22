from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Vehicles
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VehicleSerializer
from django.db.models import Q

# Create your views here.

def get_all_vehicels(request):
    # return HttpResponse("hello from backend ")
    Vehicless = Vehicles.objects.all()

    # Prepare a list of dictionaries for each bike object
    Vehicles_data = []
    for vehicle in Vehicless:
        Vehicles_data.append({
            'vehicleType' : vehicle.vehicleType,
            'vehicleName': vehicle.vehicleName,
            'frontTyrePressure': vehicle.frontTyrePressure,
            'backTyrePressure': vehicle.backTyrePressure,
            'frontTyreSize': vehicle.frontTyreSize,
            'backTyreSize': vehicle.backTyreSize,
            'vehicleImage': vehicle.VehicleImage.url if vehicle.VehicleImage else None,
        })

    # Return the bike data as a JSON response
    return JsonResponse({'vehicles': Vehicles_data})


def bike_detail(request,bike_name):
    # bike = get_object_or_404(Bike,bikeName = bike_name)

    # data ={
    #     'bikeName': bike.bikeName,
    #     'frontTyrePressure': bike.frontTyrePressure,
    #     'backTyrePressure': bike.backTyrePressure,
    #     'frontTyreSize': bike.frontTyreSize,
    #     'backTyreSize': bike.backTyreSize,
    #     'bikeImage': bike.bikeImage.url if bike.bikeImage else None,
    # }

    # return JsonResponse(data)

    return HttpResponse("hello from backend ")


def get_all_bikes(request):
    # return HttpResponse("dispalying all bikes ")
    bikes = Vehicles.objects.filter(vehicleType="bike")
    bikes_data = []
    for bike in bikes:
        bikes_data.append({
            'vehicleType' : bike.vehicleType,
            'vehicleName': bike.vehicleName,
            'frontTyrePressure': bike.frontTyrePressure,
            'backTyrePressure': bike.backTyrePressure,
            'frontTyreSize': bike.frontTyreSize,
            'backTyreSize': bike.backTyreSize,
            'vehicleImage': bike.VehicleImage.url if bike.VehicleImage else None,
        })
    return JsonResponse({'bikes': bikes_data})


def get_all_cars(request):
    # return HttpResponse("dispalying all cars ")
    cars = Vehicles.objects.filter(vehicleType="car")
    cars_data = []
    for car in cars:
        cars_data.append({
            'vehicleType' : car.vehicleType,
            'vehicleName': car.vehicleName,
            'frontTyrePressure': car.frontTyrePressure,
            'backTyrePressure': car.backTyrePressure,
            'frontTyreSize': car.frontTyreSize,
            'backTyreSize': car.backTyreSize,
            'vehicleImage': car.VehicleImage.url if car.VehicleImage else None,
        })
    return JsonResponse({'cars': cars_data})


class VehicleSearchSuggestions(APIView):
    def get(self, request):
        query = request.GET.get('q', '').strip()
        if query:
            # Search for vehicles with vehicle_name containing the query (case insensitive)
            vehicles = Vehicles.objects.filter(Q(vehicleName__iregex=rf'\b{query}'))[:10]  # Limit to 10 results
            serializer = VehicleSerializer(vehicles, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        # return Response([], status=status.HTTP_200_OK)
        return JsonResponse({"suggestions": []}, status=status.HTTP_200_OK)