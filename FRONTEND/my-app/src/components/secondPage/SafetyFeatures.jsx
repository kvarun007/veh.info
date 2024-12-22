import React from "react";

export default function SafetyFeatures({ vehicleData }) {
	const safetyFeatures = [
		"airbags",
		"anti_lock_braking_system_abs_field",
		"traction_control_system_tc_tcs_field",
		"hill_hold_control",
	];

	return (
		<div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
			<h3 className="text-xl font-semibold text-gray-700">Safety Features</h3>
			<ul className="list-disc list-inside space-y-2">
				{safetyFeatures.map((feature, index) => (
					<li key={index} className="text-gray-600">
						{vehicleData[feature] ? feature.replace(/_/g, " ") : "N/A"}
					</li>
				))}
			</ul>
		</div>
	);
}
