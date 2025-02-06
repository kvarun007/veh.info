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
		// <div className="px-2 md:px-6 bg-[#F9F9F9] py-6 rounded-2xl shadow-2xl">
		<div className="flex-1 w-[90%] p-4 justify-self-center bg-white  md:p-6  space-y-4 md:space-y-6 rounded-2xl shadow-xl">
			{/* Airbags Section */}
			{vehicleData && vehicleData.length > 0 ? (
				vehicleData[0].airbags ? (
					<div className="text-lg md:text-xl font-medium text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
						<div className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 md:h-6 md:w-6 text-[#1976D2]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
								/>
							</svg>
							<strong className="text-[#1976D2]">Airbags:</strong>
						</div>
						<div className="text-gray-600">{vehicleData[0].airbags}</div>
					</div>
				) : (
					<div className="text-lg md:text-xl font-medium text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
						<div className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 md:h-6 md:w-6 text-[#1976D2]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
								/>
							</svg>
							<strong className="text-[#1976D2]">Airbags:</strong>
						</div>
						<div className="text-gray-600">
							Airbag information not available.
						</div>
					</div>
				)
			) : (
				<div className="text-gray-500">Loading vehicle data...</div>
			)}

			{/* Braking System Section */}
			<div className="text-lg md:text-xl font-medium text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
				<div className="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 md:h-6 md:w-6 text-[#1976D2]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
						/>
					</svg>
					<strong className="text-[#1976D2]">Braking Systems:</strong>
				</div>
				<div className="text-gray-600">
					{brakingSystem_Str || "Loading braking systems..."}
				</div>
			</div>

			{/* StabilityFeatures Section */}
			<div className="text-lg md:text-xl font-medium text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
				<div className="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 md:h-6 md:w-6 text-[#1976D2]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
						/>
					</svg>
					<strong className="text-[#1976D2]">Stability Features:</strong>
				</div>
				<div className="text-gray-600">
					{stabilityFeatures_Str || "Loading stability Features..."}
				</div>
			</div>

			{/* ChildSafety Section */}
			<div className="text-lg md:text-xl font-medium text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
				<div className="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 md:h-6 md:w-6 text-[#1976D2]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
						/>
					</svg>
					<strong className="text-[#1976D2]">Child Safety:</strong>
				</div>
				<div className="text-gray-600">
					{childSafety || "Loading child Safety Features..."}
				</div>
			</div>
		</div>
		// </div>
	);
}
