# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class IndiaCarDatabaseByTeoalidaFullSpecsSample(models.Model):
    source_url = models.CharField(db_column='Source URL', max_length=100, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    make = models.CharField(db_column='Make', max_length=9, blank=True, null=True)  # Field name made lowercase.
    model = models.CharField(db_column='Model', max_length=20, blank=True, null=True)  # Field name made lowercase.
    version = models.CharField(db_column='Version', max_length=29, blank=True, null=False, primary_key=True)  # Field name made lowercase.
    notes = models.CharField(db_column='Notes', max_length=12, blank=True, null=True)  # Field name made lowercase.
    image_url = models.CharField(db_column='Image URL', max_length=1061, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    price = models.CharField(db_column='Price', max_length=12, blank=True, null=True)  # Field name made lowercase.
    on_road_price_in_delhi = models.CharField(db_column='On Road Price in Delhi', max_length=11, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    key_price = models.CharField(db_column='Key Price', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    key_mileage_arai_field = models.CharField(db_column='Key Mileage (ARAI)', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    key_engine = models.CharField(db_column='Key Engine', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    key_transmission = models.CharField(db_column='Key Transmission', max_length=29, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    key_fuel_type = models.CharField(db_column='Key Fuel Type', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    key_seating_capacity = models.CharField(db_column='Key Seating Capacity', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    engine = models.CharField(db_column='Engine', max_length=87, blank=True, null=True)  # Field name made lowercase.
    engine_type = models.CharField(db_column='Engine Type', max_length=44, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fuel_type = models.CharField(db_column='Fuel Type', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_power = models.CharField(db_column='Max Power', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_power_rpm = models.CharField(db_column='Max Power rpm', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_torque = models.CharField(db_column='Max Torque', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_torque_rpm = models.CharField(db_column='Max Torque rpm', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    performance_on_alternate_fuel = models.CharField(db_column='Performance on Alternate Fuel', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_engine_performance = models.CharField(db_column='Max Engine Performance', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_motor_performance = models.CharField(db_column='Max Motor Performance', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    mileage_arai_field = models.CharField(db_column='Mileage (ARAI)', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    power_consumption_mileage = models.CharField(db_column='Power Consumption / Mileage', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    driving_range = models.CharField(db_column='Driving Range', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    drivetrain = models.CharField(db_column='Drivetrain', max_length=3, blank=True, null=True)  # Field name made lowercase.
    transmission = models.CharField(db_column='Transmission', max_length=86, blank=True, null=True)  # Field name made lowercase.
    emission_standard = models.CharField(db_column='Emission Standard', max_length=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    turbocharger_supercharger = models.CharField(db_column='Turbocharger/Supercharger', max_length=14, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery = models.CharField(db_column='Battery', max_length=70, blank=True, null=True)  # Field name made lowercase.
    battery_charging = models.CharField(db_column='Battery Charging', max_length=18, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    electric_motor = models.CharField(db_column='Electric Motor', max_length=52, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    others = models.CharField(db_column='Others', max_length=48, blank=True, null=True)  # Field name made lowercase.
    alternate_fuel = models.CharField(db_column='Alternate Fuel', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    length = models.CharField(db_column='Length', max_length=7, blank=True, null=True)  # Field name made lowercase.
    width = models.CharField(db_column='Width', max_length=7, blank=True, null=True)  # Field name made lowercase.
    height = models.CharField(db_column='Height', max_length=7, blank=True, null=True)  # Field name made lowercase.
    wheelbase = models.CharField(db_column='Wheelbase', max_length=7, blank=True, null=True)  # Field name made lowercase.
    ground_clearance = models.CharField(db_column='Ground Clearance', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    kerb_weight = models.CharField(db_column='Kerb Weight', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    doors = models.CharField(db_column='Doors', max_length=7, blank=True, null=True)  # Field name made lowercase.
    seating_capacity = models.CharField(db_column='Seating Capacity', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    no_of_seating_rows = models.CharField(db_column='No of Seating Rows', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    bootspace = models.CharField(db_column='Bootspace', max_length=10, blank=True, null=True)  # Field name made lowercase.
    fuel_tank_capacity = models.CharField(db_column='Fuel Tank Capacity', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_suspension = models.CharField(db_column='Front Suspension', max_length=73, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_suspension = models.CharField(db_column='Rear Suspension', max_length=79, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_brake_type = models.CharField(db_column='Front Brake Type', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_brake_type = models.CharField(db_column='Rear Brake Type', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    minimum_turning_radius = models.CharField(db_column='Minimum Turning Radius', max_length=11, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    steering_type = models.CharField(db_column='Steering Type', max_length=26, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    wheels = models.CharField(db_column='Wheels', max_length=12, blank=True, null=True)  # Field name made lowercase.
    spare_wheel = models.CharField(db_column='Spare Wheel', max_length=11, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_tyres = models.CharField(db_column='Front Tyres', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_tyres = models.CharField(db_column='Rear Tyres', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    airbags = models.CharField(db_column='Airbags', max_length=75, blank=True, null=True)  # Field name made lowercase.
    middle_rear_three_point_seatbelt = models.CharField(db_column='Middle rear three point seatbelt', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    middle_rear_head_rest = models.CharField(db_column='Middle Rear Head Rest', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tyre_pressure_monitoring_system_tpms_field = models.CharField(db_column='Tyre Pressure Monitoring System (TPMS)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    child_seat_anchor_points = models.CharField(db_column='Child Seat Anchor Points', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    seat_belt_warning = models.CharField(db_column='Seat Belt Warning', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    anti_lock_braking_system_abs_field = models.CharField(db_column='Anti-Lock Braking System (ABS)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    electronic_brake_force_distribution_ebd_field = models.CharField(db_column='Electronic Brake-force Distribution (EBD)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    brake_assist_ba_field = models.CharField(db_column='Brake Assist (BA)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    electronic_stability_program_esp_field = models.CharField(db_column='Electronic Stability Program (ESP)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    four_wheel_drive = models.CharField(db_column='Four Wheel Drive', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hill_hold_control = models.CharField(db_column='Hill Hold Control', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    traction_control_system_tc_tcs_field = models.CharField(db_column='Traction Control System (TC/TCS)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ride_height_adjustment = models.CharField(db_column='Ride Height Adjustment', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hill_descent_control = models.CharField(db_column='Hill Descent Control', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    limited_slip_differential_lsd_field = models.CharField(db_column='Limited Slip Differential (LSD)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    differential_lock = models.CharField(db_column='Differential Lock', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    engine_immobilizer = models.CharField(db_column='Engine immobilizer', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    central_locking = models.CharField(db_column='Central Locking', max_length=23, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    speed_sensing_door_lock = models.CharField(db_column='Speed Sensing Door Lock', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    child_safety_lock = models.CharField(db_column='Child Safety Lock', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    air_conditioner = models.CharField(db_column='Air Conditioner', max_length=31, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_ac = models.CharField(db_column='Front AC', max_length=40, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_ac = models.CharField(db_column='Rear AC', max_length=67, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    headlight_amp_ignition_on_reminder = models.CharField(db_column='Headlight &amp; Ignition On Reminder', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    keyless_start_button_start = models.CharField(db_column='Keyless Start/ Button Start', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    steering_adjustment = models.CharField(db_column='Steering Adjustment', max_length=21, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    number_12v_power_outlets = models.CharField(db_column='12V Power Outlets', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    cruise_control = models.CharField(db_column='Cruise Control', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parking_sensors = models.CharField(db_column='Parking Sensors', max_length=16, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parking_assist = models.CharField(db_column='Parking Assist', max_length=28, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    anti_glare_mirrors = models.CharField(db_column='Anti-glare Mirrors', max_length=34, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    vanity_mirrors_on_sun_visors = models.CharField(db_column='Vanity Mirrors on Sun Visors', max_length=22, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    heater = models.CharField(db_column='Heater', max_length=3, blank=True, null=True)  # Field name made lowercase.
    cabin_boot_access = models.CharField(db_column='Cabin-Boot Access', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    remote_car_light_flashing_honking_via_app = models.CharField(db_column='Remote Car Light Flashing & Honking Via app', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    geo_fence = models.CharField(db_column='Geo-Fence', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    remote_sunroof_open_close_via_app = models.CharField(db_column='Remote Sunroof Open/Close Via app', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    over_the_air_ota_updates = models.CharField(db_column='Over The Air (OTA) Updates', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_vehicle_status_via_app = models.CharField(db_column='Check Vehicle Status Via App', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    remote_car_lock_unlock_via_app = models.CharField(db_column='Remote Car Lock/Unlock Via app', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    emergency_call = models.CharField(db_column='Emergency Call', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    find_my_car = models.CharField(db_column='Find My Car', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    driver_seat_adjustment = models.CharField(db_column='Driver Seat Adjustment', max_length=311, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_passenger_seat_adjustment = models.CharField(db_column='Front Passenger Seat Adjustment', max_length=311, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_row_seat_adjustment = models.CharField(db_column='Rear Row Seat Adjustment', max_length=76, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    third_row_seat_adjustment = models.CharField(db_column='Third Row Seat Adjustment', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    seat_upholstery = models.CharField(db_column='Seat Upholstery', max_length=11, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    leather_wrapped_steering_wheel = models.CharField(db_column='Leather-wrapped Steering Wheel', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    leather_wrapped_gear_knob = models.CharField(db_column='Leather-wrapped Gear Knob', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    driver_armrest = models.CharField(db_column='Driver Armrest', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_passenger_seats_type = models.CharField(db_column='Rear Passenger Seats Type', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    number_3rd_row_seats_type = models.CharField(db_column='3rd Row Seats Type', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    ventilated_seats = models.CharField(db_column='Ventilated Seats', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ventilated_seat_type = models.CharField(db_column='Ventilated Seat Type', max_length=17, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    interiors = models.CharField(db_column='Interiors', max_length=11, blank=True, null=True)  # Field name made lowercase.
    interior_colours = models.CharField(db_column='Interior Colours', max_length=53, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_armrest = models.CharField(db_column='Rear Armrest', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    folding_rear_seat = models.CharField(db_column='Folding Rear Seat', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    split_rear_seat = models.CharField(db_column='Split Rear Seat', max_length=14, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    split_third_row_seat = models.CharField(db_column='Split Third Row Seat', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_seat_pockets = models.CharField(db_column='Front Seat Pockets', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    head_rests = models.CharField(db_column='Head-rests', max_length=16, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cup_holders = models.CharField(db_column='Cup Holders', max_length=16, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    driver_armrest_storage = models.CharField(db_column='Driver Armrest Storage', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cooled_glove_box = models.CharField(db_column='Cooled Glove Box', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sunglass_holder = models.CharField(db_column='Sunglass Holder', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    third_row_cup_holders = models.CharField(db_column='Third Row Cup Holders', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    one_touch_down = models.CharField(db_column='One Touch -Down', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    one_touch_up = models.CharField(db_column='One Touch - Up', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    power_windows = models.CharField(db_column='Power Windows', max_length=16, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    adjustable_orvm = models.CharField(db_column='Adjustable ORVM', max_length=41, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    turn_indicators_on_orvm = models.CharField(db_column='Turn Indicators on ORVM', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_defogger = models.CharField(db_column='Rear Defogger', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_wiper = models.CharField(db_column='Rear Wiper', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    exterior_door_handles = models.CharField(db_column='Exterior Door Handles', max_length=13, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rain_sensing_wipers = models.CharField(db_column='Rain-sensing Wipers', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    interior_door_handles = models.CharField(db_column='Interior Door Handles', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    door_pockets = models.CharField(db_column='Door Pockets', max_length=16, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    side_window_blinds = models.CharField(db_column='Side Window Blinds', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    boot_lid_opener = models.CharField(db_column='Boot-lid Opener', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_windshield_blind = models.CharField(db_column='Rear Windshield Blind', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    outside_rear_view_mirrors_orvms_field = models.CharField(db_column='Outside Rear View Mirrors (ORVMs)', max_length=13, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    sunroof_moonroof = models.CharField(db_column='Sunroof Moonroof', max_length=23, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    roof_rails = models.CharField(db_column='Roof Rails', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    roof_mounted_antenna = models.CharField(db_column='Roof Mounted Antenna', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    body_coloured_bumpers = models.CharField(db_column='Body-Coloured  Bumpers', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    chrome_finish_exhaust_pipe = models.CharField(db_column='Chrome Finish Exhaust pipe', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    body_kit = models.CharField(db_column='Body Kit', max_length=21, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rub_strips = models.CharField(db_column='Rub Strips', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fog_lights = models.CharField(db_column='Fog Lights', max_length=33, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    daytime_running_lights = models.CharField(db_column='Daytime Running Lights', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    headlights = models.CharField(db_column='Headlights', max_length=20, blank=True, null=True)  # Field name made lowercase.
    automatic_head_lamps = models.CharField(db_column='Automatic Head Lamps', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    follow_me_home_headlamps = models.CharField(db_column='Follow me home headlamps', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tail_lights = models.CharField(db_column='Tail Lights', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cabin_lamps = models.CharField(db_column='Cabin Lamps', max_length=14, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    headlight_height_adjuster = models.CharField(db_column='Headlight Height Adjuster', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    glove_box_lamp = models.CharField(db_column='Glove Box Lamp', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    lights_on_vanity_mirrors = models.CharField(db_column='Lights on Vanity Mirrors', max_length=22, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_reading_lamp = models.CharField(db_column='Rear Reading Lamp', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cornering_headlights = models.CharField(db_column='Cornering Headlights', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    instrument_cluster = models.CharField(db_column='Instrument Cluster', max_length=18, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    trip_meter = models.CharField(db_column='Trip Meter', max_length=22, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_fuel_consumption = models.CharField(db_column='Average Fuel Consumption', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_speed = models.CharField(db_column='Average Speed', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    distance_to_empty = models.CharField(db_column='Distance to Empty', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    clock = models.CharField(db_column='Clock', max_length=7, blank=True, null=True)  # Field name made lowercase.
    low_fuel_level_warning = models.CharField(db_column='Low Fuel Level Warning', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    door_ajar_warning = models.CharField(db_column='Door Ajar Warning', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    adjustable_cluster_brightness = models.CharField(db_column='Adjustable Cluster Brightness', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    gear_indicator = models.CharField(db_column='Gear Indicator', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shift_indicator = models.CharField(db_column='Shift Indicator', max_length=7, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    heads_up_display_hud_field = models.CharField(db_column='Heads Up Display (HUD)', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    tachometer = models.CharField(db_column='Tachometer', max_length=8, blank=True, null=True)  # Field name made lowercase.
    instantaneous_consumption = models.CharField(db_column='Instantaneous Consumption', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    smart_connectivity = models.CharField(db_column='Smart Connectivity', max_length=28, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    integrated_in_dash_music_system = models.CharField(db_column='Integrated (in-dash) Music System', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    head_unit_size = models.CharField(db_column='Head Unit Size', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    display = models.CharField(db_column='Display', max_length=20, blank=True, null=True)  # Field name made lowercase.
    display_screen_for_rear_passengers = models.CharField(db_column='Display Screen for Rear Passengers', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    gps_navigation_system = models.CharField(db_column='GPS Navigation System', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    speakers = models.CharField(db_column='Speakers', max_length=2, blank=True, null=True)  # Field name made lowercase.
    usb_compatibility = models.CharField(db_column='USB Compatibility', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    aux_compatibility = models.CharField(db_column='Aux Compatibility', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    bluetooth_compatibility = models.CharField(db_column='Bluetooth Compatibility', max_length=27, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    mp3_playback = models.CharField(db_column='MP3 Playback', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cd_player = models.CharField(db_column='CD Player', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    dvd_playback = models.CharField(db_column='DVD Playback', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    am_fm_radio = models.CharField(db_column='AM/FM Radio', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ipod_compatibility = models.CharField(db_column='iPod Compatibility', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    internal_hard_drive = models.CharField(db_column='Internal Hard-drive', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    steering_mounted_controls = models.CharField(db_column='Steering mounted controls', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    voice_command = models.CharField(db_column='Voice Command', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_years_field = models.CharField(db_column='Warranty (Years)', max_length=1, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    warranty_kilometres_field = models.CharField(db_column='Warranty (Kilometres)', max_length=9, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    color_name = models.CharField(db_column='Color Name', max_length=346, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color_rgb = models.CharField(db_column='Color RGB', max_length=576, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ex_showroom_price = models.CharField(db_column='Ex-Showroom Price', max_length=11, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rto = models.CharField(db_column='RTO', max_length=10, blank=True, null=True)  # Field name made lowercase.
    insurance = models.CharField(db_column='Insurance', max_length=10, blank=True, null=True)  # Field name made lowercase.
    tax_collected_at_source_tcs_field = models.CharField(db_column='Tax Collected at Source (TCS)', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    handling_logistic_charges = models.CharField(db_column='Handling/Logistic Charges', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fast_tag = models.CharField(db_column='Fast Tag', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    mumbai = models.CharField(db_column='Mumbai', max_length=20, blank=True, null=True)  # Field name made lowercase.
    bangalore = models.CharField(db_column='Bangalore', max_length=20, blank=True, null=True)  # Field name made lowercase.
    delhi = models.CharField(db_column='Delhi', max_length=20, blank=True, null=True)  # Field name made lowercase.
    pune = models.CharField(db_column='Pune', max_length=20, blank=True, null=True)  # Field name made lowercase.
    navi_mumbai = models.CharField(db_column='Navi Mumbai', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hyderabad = models.CharField(db_column='Hyderabad', max_length=20, blank=True, null=True)  # Field name made lowercase.
    ahmedabad = models.CharField(db_column='Ahmedabad', max_length=20, blank=True, null=True)  # Field name made lowercase.
    chennai = models.CharField(db_column='Chennai', max_length=20, blank=True, null=True)  # Field name made lowercase.
    kolkata = models.CharField(db_column='Kolkata', max_length=20, blank=True, null=True)  # Field name made lowercase.
    user_predicted_mileage = models.DecimalField(db_column='UserPredictedMilage',max_digits=10, decimal_places=2, null=True, blank=True)
    vin_numbers = models.TextField(null=True, blank=True)
    vehicle_type = models.CharField(db_column='vehicletype',max_length=255, default="car", null=True, blank=True)

    class Meta:
        managed = False
        db_table = 'india_car_database_by_teoalida_full_specs_sample'
        
class IndiaBikeDatabase(models.Model):
    Source_URL = models.TextField(db_column='Source_URL', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    make = models.TextField(db_column='Make', blank=True, null=True)  # Field name made lowercase.
    series = models.TextField(db_column='Series', blank=True, null=True)  # Field name made lowercase.
    model = models.TextField(db_column='Model', blank=True, null=True)  # Field name made lowercase.
    version = models.TextField(db_column='Version', blank=True, null=False, primary_key=True)  # Field name made lowercase.
    ex_showroom_price_in_mumbai = models.IntegerField(db_column='Ex-showroom price in Mumbai', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    image_url = models.TextField(db_column='Image URL', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    colors_name = models.TextField(db_column='Colors name', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    colors_rgb = models.TextField(db_column='Colors RGB', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fuel_type = models.TextField(db_column='Fuel Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_power = models.TextField(db_column='Max Power', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rated_power = models.TextField(db_column='Rated Power', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    max_torque = models.TextField(db_column='Max Torque', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    emission_standard = models.TextField(db_column='Emission Standard', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    displacement = models.TextField(db_column='Displacement', blank=True, null=True)  # Field name made lowercase.
    cylinders = models.IntegerField(db_column='Cylinders', blank=True, null=True)  # Field name made lowercase.
    bore = models.TextField(db_column='Bore', blank=True, null=True)  # Field name made lowercase.
    stroke = models.TextField(db_column='Stroke', blank=True, null=True)  # Field name made lowercase.
    valves_per_cylinder = models.IntegerField(db_column='Valves Per Cylinder', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    compression_ratio = models.TextField(db_column='Compression Ratio', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ignition = models.TextField(db_column='Ignition', blank=True, null=True)  # Field name made lowercase.
    spark_plugs = models.TextField(db_column='Spark Plugs', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cooling_system = models.TextField(db_column='Cooling System', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    transmission = models.TextField(db_column='Transmission', blank=True, null=True)  # Field name made lowercase.
    transmission_type = models.TextField(db_column='Transmission Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    clutch = models.TextField(db_column='Clutch', blank=True, null=True)  # Field name made lowercase.
    fuel_delivery_system = models.TextField(db_column='Fuel Delivery System', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fuel_tank_capacity = models.TextField(db_column='Fuel Tank Capacity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    reserve_fuel_capacity = models.TextField(db_column='Reserve Fuel Capacity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    riding_range = models.TextField(db_column='Riding Range', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    mileage_arai = models.TextField(db_column='Mileage - ARAI', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    mileage_owner_reported = models.TextField(db_column='Mileage - Owner Reported', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    top_speed = models.TextField(db_column='Top Speed', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery_charging_time = models.TextField(db_column='Battery charging time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fast_charging_time = models.TextField(db_column='Fast charging time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    carrying_capacity = models.TextField(db_column='Carrying capacity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery_capacity = models.TextField(db_column='Battery capacity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery_type = models.TextField(db_column='Battery type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    motor_type = models.TextField(db_column='Motor type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    charger_output = models.TextField(db_column='Charger output', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    braking_system = models.TextField(db_column='Braking System', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_brake_type = models.TextField(db_column='Front Brake Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_brake_size = models.TextField(db_column='Front Brake Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_brake_type = models.TextField(db_column='Rear Brake Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_brake_size = models.TextField(db_column='Rear Brake Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    calliper_type = models.TextField(db_column='Calliper Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_wheel_size = models.TextField(db_column='Front Wheel Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_wheel_size = models.TextField(db_column='Rear Wheel Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_tyre_size = models.TextField(db_column='Front Tyre Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_tyre_size = models.TextField(db_column='Rear Tyre Size', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tyre_type = models.TextField(db_column='Tyre Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    radial_tyres = models.TextField(db_column='Radial Tyres', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    wheel_type = models.TextField(db_column='Wheel Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_suspension = models.TextField(db_column='Front Suspension', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rear_suspension = models.TextField(db_column='Rear Suspension', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    kerb_weight = models.TextField(db_column='Kerb Weight', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    overall_length = models.TextField(db_column='Overall Length', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    overall_width = models.TextField(db_column='Overall Width', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    overall_height = models.TextField(db_column='Overall Height', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    wheelbase = models.TextField(db_column='Wheelbase', blank=True, null=True)  # Field name made lowercase.
    ground_clearance = models.TextField(db_column='Ground Clearance', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    seat_height = models.TextField(db_column='Seat Height', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    chassis_type = models.TextField(db_column='Chassis Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery_warranty = models.TextField(db_column='Battery warranty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    motor_warranty = models.TextField(db_column='Motor warranty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    odometer = models.TextField(db_column='Odometer', blank=True, null=True)  # Field name made lowercase.
    drls_daytime_running_lights_field = models.TextField(db_column='DRLs (Daytime running lights)', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    mobile_app_connectivity = models.TextField(db_column='Mobile App Connectivity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    gps_navigation = models.TextField(db_column='GPS & Navigation', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    usb_charging_port = models.TextField(db_column='USB charging port', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    front_storage_box = models.TextField(db_column='Front storage box', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    under_seat_storage = models.TextField(db_column='Under seat storage', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    aho_automatic_headlight_on_field = models.TextField(db_column='AHO (Automatic Headlight On)', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    speedometer = models.TextField(db_column='Speedometer', blank=True, null=True)  # Field name made lowercase.
    fuel_guage = models.TextField(db_column='Fuel Guage', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tachometer = models.TextField(db_column='Tachometer', blank=True, null=True)  # Field name made lowercase.
    stand_alarm = models.TextField(db_column='Stand Alarm', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    stepped_seat = models.TextField(db_column='Stepped Seat', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    no_of_tripmeters = models.TextField(db_column='No. of Tripmeters', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tripmeter_type = models.TextField(db_column='Tripmeter Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    low_fuel_indicator = models.TextField(db_column='Low Fuel Indicator', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    low_oil_indicator = models.TextField(db_column='Low Oil Indicator', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    low_battery_indicator = models.TextField(db_column='Low Battery Indicator', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pillion_backrest = models.TextField(db_column='Pillion Backrest', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pillion_grabrail = models.TextField(db_column='Pillion Grabrail', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pillion_seat = models.TextField(db_column='Pillion Seat', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pillion_footrest = models.TextField(db_column='Pillion Footrest', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    digital_fuel_guage = models.TextField(db_column='Digital Fuel Guage', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    start_type = models.TextField(db_column='Start Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shift_light = models.TextField(db_column='Shift Light', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    antilock_braking_system = models.TextField(db_column='Antilock Braking System', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    killswitch = models.TextField(db_column='Killswitch', blank=True, null=True)  # Field name made lowercase.
    clock = models.TextField(db_column='Clock', blank=True, null=True)  # Field name made lowercase.
    electric_system = models.TextField(db_column='Electric System', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    battery = models.TextField(db_column='Battery', blank=True, null=True)  # Field name made lowercase.
    headlight_type = models.TextField(db_column='Headlight Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    headlight_bulb_type = models.TextField(db_column='Headlight Bulb Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    brake_tail_light = models.TextField(db_column='Brake/Tail Light', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    turn_signal = models.TextField(db_column='Turn Signal', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pass_light = models.TextField(db_column='Pass Light', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    additional_features = models.TextField(db_column='Additional features', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    bangalore = models.TextField(db_column='Bangalore', blank=True, null=True)  # Field name made lowercase.
    mumbai = models.TextField(db_column='Mumbai', blank=True, null=True)  # Field name made lowercase.
    delhi = models.TextField(db_column='Delhi', blank=True, null=True)  # Field name made lowercase.
    pune = models.TextField(db_column='Pune', blank=True, null=True)  # Field name made lowercase.
    chennai = models.TextField(db_column='Chennai', blank=True, null=True)  # Field name made lowercase.
    kolkata = models.TextField(db_column='Kolkata', blank=True, null=True)  # Field name made lowercase.
    hyderabad = models.TextField(db_column='Hyderabad', blank=True, null=True)  # Field name made lowercase.
    lucknow = models.TextField(db_column='Lucknow', blank=True, null=True)  # Field name made lowercase.
    about_model = models.TextField(db_column='About Model', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    

    class Meta:
        managed = False
        db_table = 'india_bike_database'

