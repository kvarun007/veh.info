import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography,
	Box,
} from "@mui/material";

export default function UserPredictedMileage({ vehicle }) {
	console.log(vehicle);
	const [open, setOpen] = useState(false);
	const [userEnteredVinNum, setUserEnteredVinNum] = useState(null);
	const [UserMileage, setUserMileage] = useState(null);
	const [result, setResult] = useState("");

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setUserEnteredVinNum(null);
		setUserMileage(null);
		setResult("");
	};

	const submitUserMileage = () => {
		// setEmi(emi.toFixed(2));
		if (vehicle.vin_numbers === null) {
			setResult("submitted Milege");
			handleSubmit(
				vehicle.version,
				userEnteredVinNum,
				UserMileage,
				vehicle.model
			);
		} else {
			if (vehicle.vin_numbers.includes(userEnteredVinNum)) {
				setResult("vin num already register");
			} else {
				setResult("something-2 ");
			}
		}
	};

	const handleSubmit = async (version, vinNumber, userMileage, model) => {
		const payload = {
			car_version: version, // Assuming carId is passed as a prop
			vin_number: vinNumber,
			user_predicted_mileage: userMileage,
			car_model: model,
		};
		if (!payload.vin_number) {
			return alert("please enter the vin num ");
		}
		if (!payload.user_predicted_mileage) {
			return alert("please enter the mileage ");
		}

		try {
			const response = await fetch(
				"http://127.0.0.1:8000/api/update-car-details/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			const result = await response.json();
			if (response.ok) {
				alert(result.message); // Show success message
			} else {
				alert(result.error); // Show error message
			}
		} catch (error) {
			console.error("Error updating car details:", error);
			alert("Failed to update car details. Please try again.");
		}
	};

	return (
		<div>
			{/* Button to Open the Modal */}
			<Button
				variant="contained"
				color="primary"
				onClick={handleOpen}
				variant="text"
				color="primary"
				className="underline text-blue-600 hover:text-blue-800"
			>
				Submit Mileage
			</Button>

			{/* Modal (Dialog) */}
			<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
				<DialogTitle>
					<Typography variant="h5" className="font-bold">
						Submit Mileage
					</Typography>
				</DialogTitle>

				<DialogContent>
					<Box className="space-y-4">
						<TextField
							label="VIN num"
							variant="outlined"
							fullWidth
							type="string"
							value={userEnteredVinNum}
							onChange={(e) => setUserEnteredVinNum(e.target.value)}
						/>

						<TextField
							label="Enter your Mileage"
							variant="outlined"
							fullWidth
							type="number"
							value={UserMileage}
							onChange={(e) => setUserMileage(e.target.value)}
						/>

						{/* <TextField
							label="Tenure (in months)"
							variant="outlined"
							fullWidth
							type="number"
							value={tenure}
							onChange={(e) => setTenure(e.target.value)}
						/> */}

						{result && (
							<Typography variant="h6" className="text-gray-800">
								{result}
							</Typography>
						)}
					</Box>
				</DialogContent>

				{/* Modal Actions */}
				<DialogActions>
					<Button
						onClick={submitUserMileage}
						variant="contained"
						color="primary"
					>
						Submit Mileage
					</Button>
					<Button onClick={handleClose} variant="outlined" color="secondary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
