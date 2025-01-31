import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function VehicleGrid() {
	const [vehiclesData, setVehiclesData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const vehicleType = useSelector((state) => state.vehicleType);

	const fetchAllVehicles = async () => {
		setIsLoading(true);
		try {
			if (vehicleType == "all") {
				// console.log(vehicleType);
				const response = await fetch(
					`http://127.0.0.1:8000/details/getallvehicles`
				);
				const result = await response.json();
				setVehiclesData(result.vehicles);
				// console.log(result.vehicles);
			} else if (vehicleType == "car") {
				// console.log(vehicleType);
				const response = await fetch(
					`http://127.0.0.1:8000/details/getallcars`
				);
				const result = await response.json();
				setVehiclesData(result.cars);
				// setVehiclesData(null)
				// console.log(result.cars);
			} else if (vehicleType == "bike") {
				// console.log(vehicleType);
				const response = await fetch(
					`http://127.0.0.1:8000/details/getallbikes`
				);
				const result = await response.json();
				setVehiclesData(result.bikes);
				// setVehiclesData(null)
				console.log(result.bikes);
			} else {
				setVehiclesData(null);
				console.log(vehicleType);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchAllVehicles();
	}, [vehicleType]);

	return (
		<Box className="max-w-7xl mx-auto px-4 mb-6 ">
			<Grid container spacing={3} sx={{ mt: 0 }}>
				{isLoading ? (
					<p className="text-center w-full">Loading vehicles...</p>
				) : vehiclesData && vehiclesData.length > 0 ? (
					vehiclesData.map((vehicle, index) => (
						<Grid item key={index} xs={12} sm={6} md={4}>
							<Paper
								elevation={2}
								className="hover:shadow-lg transition-shadow duration-300"
							>
								<img
									src={vehicle.image_url}
									alt={vehicle.model}
									className="w-full h-60 object-cover"
								/>
								<Divider className="w-full" />
								<div className="p-4 bg-[#F9F9F9]">
									<p className="font-loto text-lg font-semibold text-gray-800">
										{vehicle.model.includes(vehicle.make)
											? vehicle.model
											: vehicle.make + " " + vehicle.model}
									</p>
									<Link to={`/vehicles/${vehicle.model}`}>
										<Button
											variant="outlined"
											fullWidth
											sx={{ mt: 2, mb: 1 }}
											aria-label={`Get details for ${vehicle.model}`}
										>
											Get Details
										</Button>
									</Link>
								</div>
							</Paper>
						</Grid>
					))
				) : (
					<p className="text-center w-full">No vehicles found.</p>
				)}
			</Grid>
		</Box>
	);
}
