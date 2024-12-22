import React from "react";

export default function Specifications({ vehicleData }) {
	if (!vehicleData || vehicleData.length === 0) {
		return <div className="text-gray-500">Loading specifications...</div>;
	}
	return (
		<div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
			<h3 className="text-xl font-semibold text-gray-700">Specifications</h3>
			<ul className="space-y-2">
				<li>
					<strong>Engine:</strong> {vehicleData[0].key_engine}
				</li>
				<li>
					<strong>Mileage:</strong> {vehicleData[0].mileage_arai_field}
				</li>
				<li>
					<strong>Fuel Type:</strong> {vehicleData[0].key_fuel_type}
				</li>
				<li>
					<strong>Seating Capacity:</strong>{" "}
					{vehicleData[0].key_seating_capacity}
				</li>
			</ul>
		</div>
	);
}
