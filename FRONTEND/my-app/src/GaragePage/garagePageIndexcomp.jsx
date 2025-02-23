import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	CardMedia,
	Grid,
	CircularProgress,
	Box,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import AddMileage from "../components/Base components/addMileage";
import Modal from "@mui/material/Modal";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GarageIcon from "@mui/icons-material/Garage";

export default function GaragePageIndexComp() {
	const user = useSelector((state) => state.user);
	const openMileageModal = useSelector((state) => state.openMileageModal);

	const [garageVehicles, setGarageVehicles] = useState(null);
	// const [openMileageModal, setOpenMileageModal] = useState(false);

	//redux state to close add vehicle model
	const dispatch = useDispatch();
	const setOpenMileageModal = (data) =>
		dispatch({
			type: "SET_OPEN_MILEAGE_MODAL",
			payload: data,
		});

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
		<div className="min-h-[90svh] bg-gray-50">
			<div className="empty div bg-[#141B29] min-h-16"></div>
			<div className="max-w-6xl mx-auto p-4 mt-10">
				<Typography
					variant="h4"
					className="text-center mb-8 font-semibold text-gray-800"
				>
					Welcome to {user.name}'s Garage
				</Typography>
				<IconButton
					variant="contained"
					color="inherit"
					onClick={() => setOpenMileageModal(true)}
					sx={{
						color: "inherit",
						marginLeft: "16px",
						display: "flex",
						alignItems: "center",
						gap: "8px",
						borderRadius: 0,
						border: "none",
						outline: "none",
						backgroundColor: "transparent",
						":hover": {
							backgroundColor: "transparent",
							border: "none",
						},
						":focus": {
							border: "none",
							outline: "none",
							backgroundColor: "transparent",
						},
					}}
				>
					<GarageIcon />
					<Typography
						variant="button"
						sx={{
							fontWeight: 500,
						}}
					>
						Add Vehicle To Garage
					</Typography>
				</IconButton>
				<Grid container spacing={4} className="mt-4">
					{garageVehicles ? (
						garageVehicles.map((item, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card className="shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 relative group">
									{/* Delete Button */}
									<IconButton
										className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white rounded-full p-1"
										aria-label="delete"
										onClick={() => {
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
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="100%"
							height="200px"
						>
							<CircularProgress />
						</Box>
					)}
				</Grid>
				{/* mileage submit modal */}
				<Modal
					open={openMileageModal}
					onClose={() => setOpenMileageModal(false)}
					aria-labelledby="add-mileage-title"
					aria-describedby="add-mileage-description"
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 400,
							bgcolor: "background.paper",
							boxShadow: 24,
							p: 4,
						}}
					>
						<AddMileage />
					</Box>
				</Modal>
			</div>
		</div>
	);
}
