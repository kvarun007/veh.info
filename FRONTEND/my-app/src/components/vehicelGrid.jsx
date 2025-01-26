import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import { useVehicleType } from "./VehicleTypeContext";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./auth/loginPage";

export default function VehicleGrid() {
	// item tag styles- grid
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: "#fff",
		padding: theme.spacing(1),
		textAlign: "center",
	}));

	const [vehiclesData, setVehiclesData] = useState(null);

	// Access the vehicleType from the context
	// const { vehicleType } = useVehicleType();
	const vehicleType = useSelector((state) => state.vehicleType); // changed from context api to redux

	const lastRowStartIndex = vehiclesData
		? Math.floor(vehiclesData.length / 3) * 3
		: 0;

	// renddering all vehicles
	const fetchAllVehicles = async () => {
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
		}
	};
	useEffect(() => {
		fetchAllVehicles();
	}, [vehicleType]);

	return (
		<>
			<Box className="max-w-[90%] mx-auto  ">
				<Grid
					container
					spacing={5}
					sx={{ mt: 2 }}
					className=" mb-12 justify-center mt-1 "
				>
					{/* Check if vehiclesData is not null and map */}
					{vehiclesData ? (
						vehiclesData.map((vehicle, index) => (
							<Grid item key={index} className="">
								<Item elevation={2} className="">
									<img
										src={vehicle.image_url}
										className="size-60 object-contain"
									/>
									<Divider className=" w-[100%] " variant="middle " />
									<div className="bg-[#F9F9F9] ">
										<p className="font-loto text-2xl text-loto pt-2 text-left ml-6  font-semibold ">
											{vehicle.model.includes(vehicle.make)
												? vehicle.model
												: vehicle.make + " " + vehicle.model}
										</p>
										<Link to={`/vehicles/${vehicle.model}`}>
											<Button
												variant="outlined"
												size="large w-3/4 "
												sx={{ marginTop: "1rem", marginBottom: "1rem" }}
												// onClick={() => {
												// 	alert(`get the ${vehicle.vehicleName} details`);
												// }}
											>
												Get Details
											</Button>
										</Link>
									</div>
								</Item>
							</Grid>
						))
					) : (
						<p>Loading vehicles...</p> // Placeholder when data is loading
					)}
				</Grid>
			</Box>
		</>
	);
}
