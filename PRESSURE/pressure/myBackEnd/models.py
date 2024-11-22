from django.db import models

# Create your models here.

class Vehicles(models.Model):
    vehicleType = models.CharField(max_length=200)
    vehicleName = models.CharField(max_length= 200)
    frontTyrePressure = models.CharField(max_length= 50)
    backTyrePressure = models.CharField(max_length= 50)
    frontTyreSize = models.CharField(max_length= 50)
    backTyreSize = models.CharField(max_length= 50)
    VehicleImage = models.ImageField(upload_to="images/",null=True, blank=True)

    def __str__(self):
        return self.vehicleName