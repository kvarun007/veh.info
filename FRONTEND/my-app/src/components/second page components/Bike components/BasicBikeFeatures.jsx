import React from "react";

export default function BasicBikeFeatures({ vehicleData }) {
	// Helper function to safely access a property with a fallback value
	const getValue = (key, fallback = "Not available") => {
		if (vehicleData && vehicleData.length > 0) {
			return vehicleData[0][key] || fallback;
		}
		return fallback;
	};

	return (
		<div className="flex-1 md:w-full bg-white p-6 rounded-lg shadow-md border border-[#1976D2] space-y-4">
			{/* Braking System Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Braking System:</strong>
				</div>
				<div>{getValue("braking_system")}</div>
			</div>

			{/* Fuel Tank Capacity Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Fuel Tank Capacity:</strong>
				</div>
				<div>{getValue("fuel_tank_capacity")}</div>
			</div>

			{/* Cooling System Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Cooling System :</strong>
				</div>
				<div>{getValue("cooling_system")}</div>
			</div>

			{/* Fuel Delivery System Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Fuel Delivery System :</strong>
				</div>
				<div>{getValue("fuel_delivery_system")}</div>
			</div>
		</div>
	);
}
