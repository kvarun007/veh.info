import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	CardMedia,
	Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function GaragePageIndexComp() {
	const user = useSelector((state) => state.user);
	const [garageVehicles, setGarageVehicles] = useState(null);

	const fetchAllVehiclesFromGarage = async () => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/api/mygarage?gmail=${user.email}`
			);
			const result = await response.json();

			setGarageVehicles([...result.bikes, ...result.cars]);
		} catch (error) {
			console.log(error);
		}
	};

	const handle_delete_vehicle_form_garage = async (vehicleId, vehicleType) => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/api/deltevehiclefromgarage?vehicleId=${vehicleId}&vehicleType=${vehicleType}&user=${user.email}`
			);
			const result = await response.json();

			console.log(result.message);
			alert(result.message);
			fetchAllVehiclesFromGarage();
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchAllVehiclesFromGarage();
	}, []);

	return (
		<div className="min-h-[90svh]">
			<div className="empty div bg-[#141B29] min-h-16 "></div>
			<div className="max-w-6xl mx-auto p-4 mt-10">
				<Typography
					variant="h4"
					className="text-center mb-8 font-semibold text-black"
				>
					Welcome to {user.name}'s Garage
				</Typography>
				<Grid container spacing={4}>
					{garageVehicles ? (
						garageVehicles.map((item, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card className="shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 relative group">
									{/* Delete Button */}
									<IconButton
										className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white rounded-full p-1"
										aria-label="delete"
										onClick={() => {
											// console.log(item.vehicle_type, item.id);
											handle_delete_vehicle_form_garage(
												item.id,
												item.vehicle_type
											);
										}}
									>
										<Delete className="text-red-500" />
									</IconButton>

									{/* Vehicle Image */}
									<CardMedia
										component="img"
										height="200"
										image={item.image_url}
										alt={`${item.make} ${item.model}`}
										className="object-cover w-full"
									/>

									{/* Vehicle Details */}
									<CardContent>
										<Typography variant="h6" className="font-medium">
											{item.make} {item.model}
										</Typography>
										<Typography
											variant="body2"
											className="text-gray-600 capitalize"
										>
											{item.version} | Mileage: {item.user_mileage} km/l
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))
					) : (
						<Typography variant="body1" className="text-center text-white">
							Loading...
						</Typography>
					)}
				</Grid>
			</div>
		</div>
	);
}
