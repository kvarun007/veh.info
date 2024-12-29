import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "tailwindcss/tailwind.css";

export default function VariantsList({ data }) {
	// Handle cases where vehicleData is unavailable or empty
	console.log(data);
	if (!data || data.length === 0) {
		return (
			<Typography className="text-center text-gray-600 mt-6">
				No vehicle data available.
			</Typography>
		);
	}

	return (
		<>
			<Box className="p-4">
				{data.map((vehicle, index) => (
					<Card
						key={index}
						className="mb-4 shadow-lg border rounded-lg transition-transform hover:scale-105"
					>
						<CardContent className="flex flex-col md:flex-row justify-between items-center p-6">
							{/* Vehicle Details */}
							<Box className="flex-1">
								<Typography
									variant="h6"
									className="text-gray-900 font-bold mb-1"
								>
									{vehicle.make} {vehicle.model} {vehicle.version}
								</Typography>

								<Typography variant="body2" className="text-gray-600 mb-1">
									{vehicle.key_engine}, {vehicle.key_transmission},{" "}
									{vehicle.fuel_type}, {vehicle.key_mileage_arai_field}
								</Typography>
							</Box>

							{/* Price and Button */}
							<Box className="flex flex-col items-end">
								<Typography
									variant="h6"
									className="text-gray-800 font-bold mb-2"
								>
									₹ {vehicle.price.replace("?", "")}*
								</Typography>
								{/* <Button
									variant="text"
									color="primary"
									className="underline text-blue-600 hover:text-blue-800"
								>
									Get On-Road Price
								</Button> */}
							</Box>
						</CardContent>
					</Card>
				))}
			</Box>
		</>
	);
}
