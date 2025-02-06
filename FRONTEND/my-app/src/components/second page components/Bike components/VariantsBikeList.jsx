import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";
import EMIModal from "../Common components/emiModal";

export default function VariantsBikeList({ data }) {
	// Handle cases where vehicleData is unavailable or empty
	console.log(data);
	if (!data || data.length === 0) {
		return (
			<Typography
				className="text-center text-gray-600 mt-6 text-lg"
				component="p"
			>
				No vehicle data available.
			</Typography>
		);
	}

	return (
		<Box className="p-4  pt-4 bg-gray-50  max-h-[85svh] overflow-y-auto">
			{data.map((vehicle, index) => (
				<Card
					key={index}
					className="mb-6 shadow-md  border border-gray-200 rounded-lg transition-transform transform "
				>
					<CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6">
						{/* Vehicle Details */}
						<Box className="flex-1 ">
							<Typography
								variant="h6"
								component="h2"
								className="text-gray-900 font-bold mb-2"
							>
								{vehicle.make} {vehicle.model} {vehicle.version}
							</Typography>
							{/* <Typography
								variant="body2"
								className="text-gray-600 mb-2 leading-relaxed"
							>
								{vehicle.key_engine}, {vehicle.key_transmission},{" "}
								{vehicle.fuel_type}, {vehicle.key_mileage_arai_field}
							</Typography> */}
							<Typography variant="body2" className="text-gray-600">
								<span className="font-semibold">User Predicted Mileage:</span>{" "}
								<span className="font-bold">
									{vehicle.user_predicted_mileage || "No Record Found"}
								</span>
							</Typography>

							{/* <UserPredictedMileage vehicle={vehicle} /> */}
						</Box>

						{/* Price and Button */}
						<Box className="flex flex-col items-end">
							<Typography
								variant="h6"
								component="p"
								className="text-gray-800 font-bold mb-2"
							>
								₹ {vehicle.ex_showroom_price_in_mumbai}
							</Typography>
							<EMIModal price={vehicle.ex_showroom_price_in_mumbai} />
						</Box>
					</CardContent>
				</Card>
			))}
		</Box>
	);
}
