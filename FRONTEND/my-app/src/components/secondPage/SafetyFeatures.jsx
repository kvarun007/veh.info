import React, { useState, useEffect } from "react";

export default function SafetyFeatures({ vehicleData }) {
	const [brakingSystem_Str, setBrakingSystem_Str] = useState("");
	const [stabilityFeatures_Str, setStabilityFeatures_Str] = useState("");
	const [childSafety, setChildSafety] = useState("");

	function BrakingSystems() {
		if (vehicleData && vehicleData.length > 0) {
			const brakingSystems = [];
			if (vehicleData[0].anti_lock_braking_system_abs_field === "Yes") {
				brakingSystems.push("ABS");
			}
			if (
				vehicleData[0].electronic_brake_force_distribution_ebd_field === "Yes"
			) {
				brakingSystems.push("EBD");
			}
			if (vehicleData[0].brake_assist_ba_field === "Yes") {
				brakingSystems.push("Brake Assist");
			}
			setBrakingSystem_Str(brakingSystems.join(", "));
		}
	}

	function StabilityFeatures() {
		if (vehicleData && vehicleData.length > 0) {
			const StabilityFeatures = [];
			if (vehicleData[0].electronic_stability_program_esp_field === "Yes") {
				StabilityFeatures.push("ESP");
			}
			if (vehicleData[0].four_wheel_drive === "Yes") {
				StabilityFeatures.push("Four Wheel Drive");
			}
			if (vehicleData[0].hill_hold_control === "Yes") {
				StabilityFeatures.push("Hill Hold Control");
			}
			if (vehicleData[0].traction_control_system_tc_tcs_field === "Yes") {
				StabilityFeatures.push("Traction Control");
			}
			setStabilityFeatures_Str(StabilityFeatures.join(", "));
		}
	}

	function ChildSafety() {
		if (vehicleData && vehicleData.length > 0) {
			const ChildSafety = [];
			if (vehicleData[0].child_safety_lock === "Yes") {
				ChildSafety.push("Child Lock");
			}
			if (vehicleData[0].child_seat_anchor_points === "Yes") {
				ChildSafety.push("Child Seat Anchor Points");
			}
			setChildSafety(ChildSafety.join(", "));
		}
	}

	useEffect(() => {
		BrakingSystems();
		StabilityFeatures();
		ChildSafety();
	}, [vehicleData]);

	return (
		<div className="flex-1 md:w-1/2 bg-white p-6 rounded-lg shadow-md border border-[#1976D2] space-y-4">
			{/* Airbags Section */}
			{vehicleData && vehicleData.length > 0 ? (
				vehicleData[0].airbags ? (
					<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
						<div className="flex items-center">
							<strong className="text-[#1976D2]">Airbags:</strong>
						</div>
						<div>{vehicleData[0].airbags}</div>
					</div>
				) : (
					<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
						<div className="flex items-center">
							<strong className="text-[#1976D2]">Airbags:</strong>
						</div>
						<div>Airbag information not available.</div>
					</div>
				)
			) : (
				<div className="text-gray-500">Loading vehicle data...</div>
			)}

			{/* Braking System Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Braking Systems:</strong>
				</div>
				<div>{brakingSystem_Str || "Loading braking systems..."}</div>
			</div>

			{/* StabilityFeatures Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Stability Features:</strong>
				</div>
				<div>{stabilityFeatures_Str || "Loading stability Features..."}</div>
			</div>

			{/* ChildSafety Section */}
			<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
				<div className="flex items-center">
					<strong className="text-[#1976D2]">Child Safety:</strong>
				</div>
				<div>{childSafety || "Loading child Safety Features..."}</div>
			</div>
		</div>
	);
}
