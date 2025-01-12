// Import necessary libraries
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// React component
const OnRoadPriceCard = ({ vehicleData }) => {
	if (!vehicleData || vehicleData.length === 0) {
		return <Typography>No vehicle data available.</Typography>;
	}
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
			<Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-md">
				<CardContent>
					<Typography
						variant="h5"
						className="font-bold text-center text-blue-700"
					>
						{vehicleData[0].make} {vehicleData[0].model}
					</Typography>
					<Typography
						variant="subtitle1"
						className="text-gray-600 text-center mt-2"
					>
						{vehicleData[0].version}
					</Typography>

					{/* Conditional rendering of prices for different cities */}
					{vehicleData[0].mumbai && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Mumbai
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].mumbai.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].bangalore && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Bangalore
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].bangalore.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].delhi && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Delhi
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].delhi.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].pune && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Pune
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].pune.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].navi_mumbai && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Navi Mumbai
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].navi_mumbai.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].hyderabad && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Hyderabad
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].hyderabad.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].ahmedabad && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Ahmedabad
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].ahmedabad.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].chennai && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Chennai
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].chennai.replace("?", "")}
							</Typography>
						</div>
					)}

					{vehicleData[0].kolkata && (
						<div className="mt-4 bg-blue-50 p-4 rounded-md">
							<Typography variant="h6" className="text-center text-gray-800">
								On-Road Price in Kolkata
							</Typography>
							<Typography
								variant="h4"
								className="font-semibold text-center text-green-600 mt-2"
							>
								{vehicleData[0].kolkata.replace("?", "")}
							</Typography>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};

export default OnRoadPriceCard;
