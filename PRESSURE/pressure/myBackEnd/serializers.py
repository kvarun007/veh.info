# serializers.py
from rest_framework import serializers
from .models import Vehicles

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicles
        fields = ['id', 'vehicleType', 'vehicleName', 'frontTyrePressure', 
                  'backTyrePressure', 'frontTyreSize', 'backTyreSize', 'VehicleImage']
