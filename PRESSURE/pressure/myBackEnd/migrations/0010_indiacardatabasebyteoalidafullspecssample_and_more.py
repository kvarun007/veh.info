# Generated by Django 5.1.2 on 2024-12-05 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myBackEnd', '0009_alter_vehicles_vehicletype'),
    ]

    operations = [
        migrations.CreateModel(
            name='IndiaCarDatabaseByTeoalidaFullSpecsSample',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source_url', models.CharField(blank=True, db_column='Source URL', max_length=100, null=True)),
                ('make', models.CharField(blank=True, db_column='Make', max_length=9, null=True)),
                ('model', models.CharField(blank=True, db_column='Model', max_length=20, null=True)),
                ('version', models.CharField(blank=True, db_column='Version', max_length=29, null=True)),
                ('notes', models.CharField(blank=True, db_column='Notes', max_length=12, null=True)),
                ('image_url', models.CharField(blank=True, db_column='Image URL', max_length=1061, null=True)),
                ('price', models.CharField(blank=True, db_column='Price', max_length=12, null=True)),
                ('on_road_price_in_delhi', models.CharField(blank=True, db_column='On Road Price in Delhi', max_length=11, null=True)),
                ('key_price', models.CharField(blank=True, db_column='Key Price', max_length=12, null=True)),
                ('key_mileage_arai_field', models.CharField(blank=True, db_column='Key Mileage (ARAI)', max_length=10, null=True)),
                ('key_engine', models.CharField(blank=True, db_column='Key Engine', max_length=7, null=True)),
                ('key_transmission', models.CharField(blank=True, db_column='Key Transmission', max_length=29, null=True)),
                ('key_fuel_type', models.CharField(blank=True, db_column='Key Fuel Type', max_length=9, null=True)),
                ('key_seating_capacity', models.CharField(blank=True, db_column='Key Seating Capacity', max_length=8, null=True)),
                ('engine', models.CharField(blank=True, db_column='Engine', max_length=87, null=True)),
                ('engine_type', models.CharField(blank=True, db_column='Engine Type', max_length=44, null=True)),
                ('fuel_type', models.CharField(blank=True, db_column='Fuel Type', max_length=7, null=True)),
                ('max_power', models.CharField(blank=True, db_column='Max Power', max_length=8, null=True)),
                ('max_power_rpm', models.CharField(blank=True, db_column='Max Power rpm', max_length=9, null=True)),
                ('max_torque', models.CharField(blank=True, db_column='Max Torque', max_length=7, null=True)),
                ('max_torque_rpm', models.CharField(blank=True, db_column='Max Torque rpm', max_length=9, null=True)),
                ('performance_on_alternate_fuel', models.CharField(blank=True, db_column='Performance on Alternate Fuel', max_length=10, null=True)),
                ('max_engine_performance', models.CharField(blank=True, db_column='Max Engine Performance', max_length=10, null=True)),
                ('max_motor_performance', models.CharField(blank=True, db_column='Max Motor Performance', max_length=15, null=True)),
                ('mileage_arai_field', models.CharField(blank=True, db_column='Mileage (ARAI)', max_length=10, null=True)),
                ('power_consumption_mileage', models.CharField(blank=True, db_column='Power Consumption / Mileage', max_length=12, null=True)),
                ('driving_range', models.CharField(blank=True, db_column='Driving Range', max_length=10, null=True)),
                ('drivetrain', models.CharField(blank=True, db_column='Drivetrain', max_length=3, null=True)),
                ('transmission', models.CharField(blank=True, db_column='Transmission', max_length=86, null=True)),
                ('emission_standard', models.CharField(blank=True, db_column='Emission Standard', max_length=4, null=True)),
                ('turbocharger_supercharger', models.CharField(blank=True, db_column='Turbocharger/Supercharger', max_length=14, null=True)),
                ('battery', models.CharField(blank=True, db_column='Battery', max_length=70, null=True)),
                ('battery_charging', models.CharField(blank=True, db_column='Battery Charging', max_length=18, null=True)),
                ('electric_motor', models.CharField(blank=True, db_column='Electric Motor', max_length=52, null=True)),
                ('others', models.CharField(blank=True, db_column='Others', max_length=48, null=True)),
                ('alternate_fuel', models.CharField(blank=True, db_column='Alternate Fuel', max_length=10, null=True)),
                ('length', models.CharField(blank=True, db_column='Length', max_length=7, null=True)),
                ('width', models.CharField(blank=True, db_column='Width', max_length=7, null=True)),
                ('height', models.CharField(blank=True, db_column='Height', max_length=7, null=True)),
                ('wheelbase', models.CharField(blank=True, db_column='Wheelbase', max_length=7, null=True)),
                ('ground_clearance', models.CharField(blank=True, db_column='Ground Clearance', max_length=6, null=True)),
                ('kerb_weight', models.CharField(blank=True, db_column='Kerb Weight', max_length=7, null=True)),
                ('doors', models.CharField(blank=True, db_column='Doors', max_length=7, null=True)),
                ('seating_capacity', models.CharField(blank=True, db_column='Seating Capacity', max_length=8, null=True)),
                ('no_of_seating_rows', models.CharField(blank=True, db_column='No of Seating Rows', max_length=6, null=True)),
                ('bootspace', models.CharField(blank=True, db_column='Bootspace', max_length=10, null=True)),
                ('fuel_tank_capacity', models.CharField(blank=True, db_column='Fuel Tank Capacity', max_length=9, null=True)),
                ('front_suspension', models.CharField(blank=True, db_column='Front Suspension', max_length=73, null=True)),
                ('rear_suspension', models.CharField(blank=True, db_column='Rear Suspension', max_length=79, null=True)),
                ('front_brake_type', models.CharField(blank=True, db_column='Front Brake Type', max_length=15, null=True)),
                ('rear_brake_type', models.CharField(blank=True, db_column='Rear Brake Type', max_length=15, null=True)),
                ('minimum_turning_radius', models.CharField(blank=True, db_column='Minimum Turning Radius', max_length=11, null=True)),
                ('steering_type', models.CharField(blank=True, db_column='Steering Type', max_length=26, null=True)),
                ('wheels', models.CharField(blank=True, db_column='Wheels', max_length=12, null=True)),
                ('spare_wheel', models.CharField(blank=True, db_column='Spare Wheel', max_length=11, null=True)),
                ('front_tyres', models.CharField(blank=True, db_column='Front Tyres', max_length=12, null=True)),
                ('rear_tyres', models.CharField(blank=True, db_column='Rear Tyres', max_length=12, null=True)),
                ('airbags', models.CharField(blank=True, db_column='Airbags', max_length=75, null=True)),
                ('middle_rear_three_point_seatbelt', models.CharField(blank=True, db_column='Middle rear three point seatbelt', max_length=3, null=True)),
                ('middle_rear_head_rest', models.CharField(blank=True, db_column='Middle Rear Head Rest', max_length=3, null=True)),
                ('tyre_pressure_monitoring_system_tpms_field', models.CharField(blank=True, db_column='Tyre Pressure Monitoring System (TPMS)', max_length=3, null=True)),
                ('child_seat_anchor_points', models.CharField(blank=True, db_column='Child Seat Anchor Points', max_length=3, null=True)),
                ('seat_belt_warning', models.CharField(blank=True, db_column='Seat Belt Warning', max_length=3, null=True)),
                ('anti_lock_braking_system_abs_field', models.CharField(blank=True, db_column='Anti-Lock Braking System (ABS)', max_length=3, null=True)),
                ('electronic_brake_force_distribution_ebd_field', models.CharField(blank=True, db_column='Electronic Brake-force Distribution (EBD)', max_length=3, null=True)),
                ('brake_assist_ba_field', models.CharField(blank=True, db_column='Brake Assist (BA)', max_length=3, null=True)),
                ('electronic_stability_program_esp_field', models.CharField(blank=True, db_column='Electronic Stability Program (ESP)', max_length=3, null=True)),
                ('four_wheel_drive', models.CharField(blank=True, db_column='Four Wheel Drive', max_length=10, null=True)),
                ('hill_hold_control', models.CharField(blank=True, db_column='Hill Hold Control', max_length=3, null=True)),
                ('traction_control_system_tc_tcs_field', models.CharField(blank=True, db_column='Traction Control System (TC/TCS)', max_length=3, null=True)),
                ('ride_height_adjustment', models.CharField(blank=True, db_column='Ride Height Adjustment', max_length=10, null=True)),
                ('hill_descent_control', models.CharField(blank=True, db_column='Hill Descent Control', max_length=3, null=True)),
                ('limited_slip_differential_lsd_field', models.CharField(blank=True, db_column='Limited Slip Differential (LSD)', max_length=3, null=True)),
                ('differential_lock', models.CharField(blank=True, db_column='Differential Lock', max_length=10, null=True)),
                ('engine_immobilizer', models.CharField(blank=True, db_column='Engine immobilizer', max_length=3, null=True)),
                ('central_locking', models.CharField(blank=True, db_column='Central Locking', max_length=23, null=True)),
                ('speed_sensing_door_lock', models.CharField(blank=True, db_column='Speed Sensing Door Lock', max_length=3, null=True)),
                ('child_safety_lock', models.CharField(blank=True, db_column='Child Safety Lock', max_length=3, null=True)),
                ('air_conditioner', models.CharField(blank=True, db_column='Air Conditioner', max_length=31, null=True)),
                ('front_ac', models.CharField(blank=True, db_column='Front AC', max_length=40, null=True)),
                ('rear_ac', models.CharField(blank=True, db_column='Rear AC', max_length=67, null=True)),
                ('headlight_amp_ignition_on_reminder', models.CharField(blank=True, db_column='Headlight &amp; Ignition On Reminder', max_length=3, null=True)),
                ('keyless_start_button_start', models.CharField(blank=True, db_column='Keyless Start/ Button Start', max_length=3, null=True)),
                ('steering_adjustment', models.CharField(blank=True, db_column='Steering Adjustment', max_length=21, null=True)),
                ('number_12v_power_outlets', models.CharField(blank=True, db_column='12V Power Outlets', max_length=3, null=True)),
                ('cruise_control', models.CharField(blank=True, db_column='Cruise Control', max_length=3, null=True)),
                ('parking_sensors', models.CharField(blank=True, db_column='Parking Sensors', max_length=16, null=True)),
                ('parking_assist', models.CharField(blank=True, db_column='Parking Assist', max_length=28, null=True)),
                ('anti_glare_mirrors', models.CharField(blank=True, db_column='Anti-glare Mirrors', max_length=34, null=True)),
                ('vanity_mirrors_on_sun_visors', models.CharField(blank=True, db_column='Vanity Mirrors on Sun Visors', max_length=22, null=True)),
                ('heater', models.CharField(blank=True, db_column='Heater', max_length=3, null=True)),
                ('cabin_boot_access', models.CharField(blank=True, db_column='Cabin-Boot Access', max_length=3, null=True)),
                ('remote_car_light_flashing_honking_via_app', models.CharField(blank=True, db_column='Remote Car Light Flashing & Honking Via app', max_length=3, null=True)),
                ('geo_fence', models.CharField(blank=True, db_column='Geo-Fence', max_length=3, null=True)),
                ('remote_sunroof_open_close_via_app', models.CharField(blank=True, db_column='Remote Sunroof Open/Close Via app', max_length=10, null=True)),
                ('over_the_air_ota_updates', models.CharField(blank=True, db_column='Over The Air (OTA) Updates', max_length=3, null=True)),
                ('check_vehicle_status_via_app', models.CharField(blank=True, db_column='Check Vehicle Status Via App', max_length=3, null=True)),
                ('remote_car_lock_unlock_via_app', models.CharField(blank=True, db_column='Remote Car Lock/Unlock Via app', max_length=3, null=True)),
                ('emergency_call', models.CharField(blank=True, db_column='Emergency Call', max_length=3, null=True)),
                ('find_my_car', models.CharField(blank=True, db_column='Find My Car', max_length=3, null=True)),
                ('driver_seat_adjustment', models.CharField(blank=True, db_column='Driver Seat Adjustment', max_length=311, null=True)),
                ('front_passenger_seat_adjustment', models.CharField(blank=True, db_column='Front Passenger Seat Adjustment', max_length=311, null=True)),
                ('rear_row_seat_adjustment', models.CharField(blank=True, db_column='Rear Row Seat Adjustment', max_length=76, null=True)),
                ('third_row_seat_adjustment', models.CharField(blank=True, db_column='Third Row Seat Adjustment', max_length=10, null=True)),
                ('seat_upholstery', models.CharField(blank=True, db_column='Seat Upholstery', max_length=11, null=True)),
                ('leather_wrapped_steering_wheel', models.CharField(blank=True, db_column='Leather-wrapped Steering Wheel', max_length=3, null=True)),
                ('leather_wrapped_gear_knob', models.CharField(blank=True, db_column='Leather-wrapped Gear Knob', max_length=3, null=True)),
                ('driver_armrest', models.CharField(blank=True, db_column='Driver Armrest', max_length=3, null=True)),
                ('rear_passenger_seats_type', models.CharField(blank=True, db_column='Rear Passenger Seats Type', max_length=5, null=True)),
                ('number_3rd_row_seats_type', models.CharField(blank=True, db_column='3rd Row Seats Type', max_length=10, null=True)),
                ('ventilated_seats', models.CharField(blank=True, db_column='Ventilated Seats', max_length=10, null=True)),
                ('ventilated_seat_type', models.CharField(blank=True, db_column='Ventilated Seat Type', max_length=17, null=True)),
                ('interiors', models.CharField(blank=True, db_column='Interiors', max_length=11, null=True)),
                ('interior_colours', models.CharField(blank=True, db_column='Interior Colours', max_length=53, null=True)),
                ('rear_armrest', models.CharField(blank=True, db_column='Rear Armrest', max_length=15, null=True)),
                ('folding_rear_seat', models.CharField(blank=True, db_column='Folding Rear Seat', max_length=7, null=True)),
                ('split_rear_seat', models.CharField(blank=True, db_column='Split Rear Seat', max_length=14, null=True)),
                ('split_third_row_seat', models.CharField(blank=True, db_column='Split Third Row Seat', max_length=10, null=True)),
                ('front_seat_pockets', models.CharField(blank=True, db_column='Front Seat Pockets', max_length=3, null=True)),
                ('head_rests', models.CharField(blank=True, db_column='Head-rests', max_length=16, null=True)),
                ('cup_holders', models.CharField(blank=True, db_column='Cup Holders', max_length=16, null=True)),
                ('driver_armrest_storage', models.CharField(blank=True, db_column='Driver Armrest Storage', max_length=3, null=True)),
                ('cooled_glove_box', models.CharField(blank=True, db_column='Cooled Glove Box', max_length=3, null=True)),
                ('sunglass_holder', models.CharField(blank=True, db_column='Sunglass Holder', max_length=3, null=True)),
                ('third_row_cup_holders', models.CharField(blank=True, db_column='Third Row Cup Holders', max_length=10, null=True)),
                ('one_touch_down', models.CharField(blank=True, db_column='One Touch -Down', max_length=6, null=True)),
                ('one_touch_up', models.CharField(blank=True, db_column='One Touch - Up', max_length=6, null=True)),
                ('power_windows', models.CharField(blank=True, db_column='Power Windows', max_length=16, null=True)),
                ('adjustable_orvm', models.CharField(blank=True, db_column='Adjustable ORVM', max_length=41, null=True)),
                ('turn_indicators_on_orvm', models.CharField(blank=True, db_column='Turn Indicators on ORVM', max_length=3, null=True)),
                ('rear_defogger', models.CharField(blank=True, db_column='Rear Defogger', max_length=3, null=True)),
                ('rear_wiper', models.CharField(blank=True, db_column='Rear Wiper', max_length=3, null=True)),
                ('exterior_door_handles', models.CharField(blank=True, db_column='Exterior Door Handles', max_length=13, null=True)),
                ('rain_sensing_wipers', models.CharField(blank=True, db_column='Rain-sensing Wipers', max_length=3, null=True)),
                ('interior_door_handles', models.CharField(blank=True, db_column='Interior Door Handles', max_length=9, null=True)),
                ('door_pockets', models.CharField(blank=True, db_column='Door Pockets', max_length=16, null=True)),
                ('side_window_blinds', models.CharField(blank=True, db_column='Side Window Blinds', max_length=15, null=True)),
                ('boot_lid_opener', models.CharField(blank=True, db_column='Boot-lid Opener', max_length=25, null=True)),
                ('rear_windshield_blind', models.CharField(blank=True, db_column='Rear Windshield Blind', max_length=8, null=True)),
                ('outside_rear_view_mirrors_orvms_field', models.CharField(blank=True, db_column='Outside Rear View Mirrors (ORVMs)', max_length=13, null=True)),
                ('sunroof_moonroof', models.CharField(blank=True, db_column='Sunroof Moonroof', max_length=23, null=True)),
                ('roof_rails', models.CharField(blank=True, db_column='Roof Rails', max_length=3, null=True)),
                ('roof_mounted_antenna', models.CharField(blank=True, db_column='Roof Mounted Antenna', max_length=3, null=True)),
                ('body_coloured_bumpers', models.CharField(blank=True, db_column='Body-Coloured  Bumpers', max_length=3, null=True)),
                ('chrome_finish_exhaust_pipe', models.CharField(blank=True, db_column='Chrome Finish Exhaust pipe', max_length=3, null=True)),
                ('body_kit', models.CharField(blank=True, db_column='Body Kit', max_length=21, null=True)),
                ('rub_strips', models.CharField(blank=True, db_column='Rub Strips', max_length=5, null=True)),
                ('fog_lights', models.CharField(blank=True, db_column='Fog Lights', max_length=33, null=True)),
                ('daytime_running_lights', models.CharField(blank=True, db_column='Daytime Running Lights', max_length=7, null=True)),
                ('headlights', models.CharField(blank=True, db_column='Headlights', max_length=20, null=True)),
                ('automatic_head_lamps', models.CharField(blank=True, db_column='Automatic Head Lamps', max_length=3, null=True)),
                ('follow_me_home_headlamps', models.CharField(blank=True, db_column='Follow me home headlamps', max_length=3, null=True)),
                ('tail_lights', models.CharField(blank=True, db_column='Tail Lights', max_length=10, null=True)),
                ('cabin_lamps', models.CharField(blank=True, db_column='Cabin Lamps', max_length=14, null=True)),
                ('headlight_height_adjuster', models.CharField(blank=True, db_column='Headlight Height Adjuster', max_length=3, null=True)),
                ('glove_box_lamp', models.CharField(blank=True, db_column='Glove Box Lamp', max_length=3, null=True)),
                ('lights_on_vanity_mirrors', models.CharField(blank=True, db_column='Lights on Vanity Mirrors', max_length=22, null=True)),
                ('rear_reading_lamp', models.CharField(blank=True, db_column='Rear Reading Lamp', max_length=3, null=True)),
                ('cornering_headlights', models.CharField(blank=True, db_column='Cornering Headlights', max_length=7, null=True)),
                ('instrument_cluster', models.CharField(blank=True, db_column='Instrument Cluster', max_length=18, null=True)),
                ('trip_meter', models.CharField(blank=True, db_column='Trip Meter', max_length=22, null=True)),
                ('average_fuel_consumption', models.CharField(blank=True, db_column='Average Fuel Consumption', max_length=3, null=True)),
                ('average_speed', models.CharField(blank=True, db_column='Average Speed', max_length=3, null=True)),
                ('distance_to_empty', models.CharField(blank=True, db_column='Distance to Empty', max_length=3, null=True)),
                ('clock', models.CharField(blank=True, db_column='Clock', max_length=7, null=True)),
                ('low_fuel_level_warning', models.CharField(blank=True, db_column='Low Fuel Level Warning', max_length=3, null=True)),
                ('door_ajar_warning', models.CharField(blank=True, db_column='Door Ajar Warning', max_length=3, null=True)),
                ('adjustable_cluster_brightness', models.CharField(blank=True, db_column='Adjustable Cluster Brightness', max_length=3, null=True)),
                ('gear_indicator', models.CharField(blank=True, db_column='Gear Indicator', max_length=3, null=True)),
                ('shift_indicator', models.CharField(blank=True, db_column='Shift Indicator', max_length=7, null=True)),
                ('heads_up_display_hud_field', models.CharField(blank=True, db_column='Heads Up Display (HUD)', max_length=3, null=True)),
                ('tachometer', models.CharField(blank=True, db_column='Tachometer', max_length=8, null=True)),
                ('instantaneous_consumption', models.CharField(blank=True, db_column='Instantaneous Consumption', max_length=3, null=True)),
                ('smart_connectivity', models.CharField(blank=True, db_column='Smart Connectivity', max_length=28, null=True)),
                ('integrated_in_dash_music_system', models.CharField(blank=True, db_column='Integrated (in-dash) Music System', max_length=3, null=True)),
                ('head_unit_size', models.CharField(blank=True, db_column='Head Unit Size', max_length=5, null=True)),
                ('display', models.CharField(blank=True, db_column='Display', max_length=20, null=True)),
                ('display_screen_for_rear_passengers', models.CharField(blank=True, db_column='Display Screen for Rear Passengers', max_length=10, null=True)),
                ('gps_navigation_system', models.CharField(blank=True, db_column='GPS Navigation System', max_length=3, null=True)),
                ('speakers', models.CharField(blank=True, db_column='Speakers', max_length=2, null=True)),
                ('usb_compatibility', models.CharField(blank=True, db_column='USB Compatibility', max_length=3, null=True)),
                ('aux_compatibility', models.CharField(blank=True, db_column='Aux Compatibility', max_length=3, null=True)),
                ('bluetooth_compatibility', models.CharField(blank=True, db_column='Bluetooth Compatibility', max_length=27, null=True)),
                ('mp3_playback', models.CharField(blank=True, db_column='MP3 Playback', max_length=3, null=True)),
                ('cd_player', models.CharField(blank=True, db_column='CD Player', max_length=3, null=True)),
                ('dvd_playback', models.CharField(blank=True, db_column='DVD Playback', max_length=3, null=True)),
                ('am_fm_radio', models.CharField(blank=True, db_column='AM/FM Radio', max_length=3, null=True)),
                ('ipod_compatibility', models.CharField(blank=True, db_column='iPod Compatibility', max_length=3, null=True)),
                ('internal_hard_drive', models.CharField(blank=True, db_column='Internal Hard-drive', max_length=3, null=True)),
                ('steering_mounted_controls', models.CharField(blank=True, db_column='Steering mounted controls', max_length=3, null=True)),
                ('voice_command', models.CharField(blank=True, db_column='Voice Command', max_length=3, null=True)),
                ('warranty_years_field', models.CharField(blank=True, db_column='Warranty (Years)', max_length=1, null=True)),
                ('warranty_kilometres_field', models.CharField(blank=True, db_column='Warranty (Kilometres)', max_length=9, null=True)),
                ('color_name', models.CharField(blank=True, db_column='Color Name', max_length=346, null=True)),
                ('color_rgb', models.CharField(blank=True, db_column='Color RGB', max_length=576, null=True)),
                ('ex_showroom_price', models.CharField(blank=True, db_column='Ex-Showroom Price', max_length=11, null=True)),
                ('rto', models.CharField(blank=True, db_column='RTO', max_length=10, null=True)),
                ('insurance', models.CharField(blank=True, db_column='Insurance', max_length=10, null=True)),
                ('tax_collected_at_source_tcs_field', models.CharField(blank=True, db_column='Tax Collected at Source (TCS)', max_length=8, null=True)),
                ('handling_logistic_charges', models.CharField(blank=True, db_column='Handling/Logistic Charges', max_length=10, null=True)),
                ('fast_tag', models.CharField(blank=True, db_column='Fast Tag', max_length=5, null=True)),
                ('mumbai', models.CharField(blank=True, db_column='Mumbai', max_length=20, null=True)),
                ('bangalore', models.CharField(blank=True, db_column='Bangalore', max_length=20, null=True)),
                ('delhi', models.CharField(blank=True, db_column='Delhi', max_length=20, null=True)),
                ('pune', models.CharField(blank=True, db_column='Pune', max_length=20, null=True)),
                ('navi_mumbai', models.CharField(blank=True, db_column='Navi Mumbai', max_length=20, null=True)),
                ('hyderabad', models.CharField(blank=True, db_column='Hyderabad', max_length=20, null=True)),
                ('ahmedabad', models.CharField(blank=True, db_column='Ahmedabad', max_length=20, null=True)),
                ('chennai', models.CharField(blank=True, db_column='Chennai', max_length=20, null=True)),
                ('kolkata', models.CharField(blank=True, db_column='Kolkata', max_length=20, null=True)),
            ],
            options={
                'db_table': 'india_car_database_by_teoalida_full_specs_sample',
                'managed': False,
            },
        ),
        migrations.DeleteModel(
            name='Vehicles',
        ),
    ]
