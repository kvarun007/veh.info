# Generated by Django 5.1.2 on 2024-10-26 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myBackEnd', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bike',
            name='bikeImage',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
