// Import necessary libraries
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// React component
const OnRoadPriceCard = ({ vehicleData }) => {
	if (!vehicleData || vehicleData.length === 0) {
		return (
			<Typography className="text-center text-red-500 mt-10">
				No vehicle data available.
			</Typography>
		);
	}

	return (
		<div className="flex justify-center items-center  ">
			<Card className="w-full max-w-2xl p-2">
				<CardContent className="p-6 ">
					<Typography variant="h4" className="font-extrabold text-center mb-2">
						{vehicleData[0].make} {vehicleData[0].model}
					</Typography>
					<Typography
						variant="subtitle1"
						className="text-gray-600 text-center italic mb-4"
					>
						{vehicleData[0].version}
					</Typography>

					{/* Conditional rendering of prices for different cities */}
					<div className=" ">
						{[
							"mumbai",
							"bangalore",
							"delhi",
							"pune",
							"navi_mumbai",
							"hyderabad",
							"ahmedabad",
							"chennai",
							"kolkata",
						].map(
							(city) =>
								vehicleData[0][city] && (
									<div
										key={city}
										className="mt-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 "
									>
										<Typography
											variant="h6"
											className="text-center text-blue-700 font-semibold"
										>
											On-Road Price in{" "}
											{city.charAt(0).toUpperCase() + city.slice(1)}
										</Typography>
										<Typography
											variant="h4"
											className="font-bold text-center text-green-600 mt-2"
										>
											{vehicleData[0][city].replace("?", "")}
										</Typography>
									</div>
								)
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default OnRoadPriceCard;
