import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function GaragePageIndexComp() {
	const user = useSelector((state) => state.user);
	const [garageBikes, setGarageBikes] = useState(null);
	const [garageCars, setGarageCars] = useState(null);
	const [garageVehicels, setGarageVehicles] = useState(null);

	const fetchAllVehiclesFromGarage = async () => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/api/mygarage?gmail=${user.email}`
			);
			const result = await response.json();

			setGarageBikes(result.bikes);
			setGarageCars(result.cars);
			// console.log(result.bikes[0]);
			// console.log(result.cars);
			console.log([...result.bikes, ...result.cars]);
			setGarageVehicles([...garageBikes, ...garageCars]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllVehiclesFromGarage();
	}, []);
	return (
		<>
			<div className=" empty div bg-[#141B29] min-h-16"> </div>
			<div className="max-w-3xl mx-auto p-4">
				<Typography variant="h4" className="text-center mb-4 font-semibold">
					wellcome to {user.name}'s garage
				</Typography>
				<div className="space-y-4">
					{garageVehicels ? (
						<div>
							{garageVehicels.map((item, index) => (
								<Card key={index} className="shadow-lg rounded-xl">
									<CardContent className="flex justify-between items-center">
										<div>
											<Typography variant="h6" className="font-medium">
												{item.id}
											</Typography>
											<Typography
												variant="body2"
												className="text-gray-600 capitalize"
											>
												Type: {item.vehicletype} | Mileage: {item.user_mileage}{" "}
												km/l
											</Typography>
										</div>
										<IconButton>
											<Delete className="text-red-500" />
										</IconButton>
									</CardContent>
								</Card>
							))}
						</div>
					) : null}
				</div>
			</div>
		</>
	);
}
