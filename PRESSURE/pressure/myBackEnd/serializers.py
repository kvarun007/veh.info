# serializers.py
from rest_framework import serializers
from .models import IndiaCarDatabaseByTeoalidaFullSpecsSample

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndiaCarDatabaseByTeoalidaFullSpecsSample
        fields = ['make', 'model', ]
