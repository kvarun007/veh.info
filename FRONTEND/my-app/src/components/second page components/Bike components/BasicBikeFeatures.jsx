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
		// <div className="px-2 md:px-6 bg-[#F9F9F9] py-6">
		<div className="flex-1 w-[90%] pt-4 justify-self-center bg-white p-4 md:p-6 space-y-4 md:space-y-6 rounded-2xl shadow-xl">
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
					<strong className="text-[#1976D2]">Braking System:</strong>
				</div>
				<div className="text-gray-600">{getValue("braking_system")}</div>
			</div>

			{/* Fuel Tank Capacity Section */}
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
					<strong className="text-[#1976D2]">Fuel Tank Capacity:</strong>
				</div>
				<div className="text-gray-600">{getValue("fuel_tank_capacity")}</div>
			</div>

			{/* Cooling System Section */}
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
					<strong className="text-[#1976D2]">Cooling System:</strong>
				</div>
				<div className="text-gray-600">{getValue("cooling_system")}</div>
			</div>

			{/* Fuel Delivery System Section */}
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
					<strong className="text-[#1976D2]">Fuel Delivery System:</strong>
				</div>
				<div className="text-gray-600">{getValue("fuel_delivery_system")}</div>
			</div>
		</div>
		// </div>
	);
}
