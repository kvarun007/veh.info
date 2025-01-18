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
	Snackbar,
} from "@mui/material";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

export default function UserPredictedMileage({ vehicle }) {
	const [open, setOpen] = useState(false);
	const [userEnteredVinNum, setUserEnteredVinNum] = useState(null);
	const [UserMileage, setUserMileage] = useState(null);
	const [result, setResult] = useState("");
	const [user, setUser] = useState(null);
	const [snackbarMessage, setSnackbarMessage] = useState("");

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setUserEnteredVinNum(null);
		setUserMileage(null);
		setResult("");
	};

	const handleError = (message) => {
		setSnackbarMessage(message);
	};

	const login = useGoogleLogin({
		onSuccess: async (response) => {
			const { access_token } = response;
			try {
				const res = await fetch(
					"https://www.googleapis.com/oauth2/v3/userinfo",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${access_token}`,
						},
					}
				);
				const profile = await res.json();
				console.log("User Profile:", profile);
				setUser(profile);
				handleError(`Logged in as ${profile.name}`);
			} catch (error) {
				console.error("Error fetching profile:", error);
				handleError("Failed to fetch user profile. Please try again.");
			}
		},
		onError: () => {
			handleError("Login Failed");
		},
	});

	const submitUserMileage = () => {
		if (!user) {
			handleError("You need to log in with Google to submit mileage.");
			return;
		}

		if (vehicle.vin_numbers === null) {
			setResult("Submitted Mileage");
			handleSubmit(
				vehicle.version,
				userEnteredVinNum,
				UserMileage,
				vehicle.model
			);
		} else if (vehicle.vin_numbers.includes(userEnteredVinNum)) {
			setResult("VIN number already registered");
		} else {
			setResult("Something went wrong.");
		}
	};

	const handleSubmit = async (version, vinNumber, userMileage, model) => {
		const payload = {
			car_version: version,
			vin_number: vinNumber,
			user_predicted_mileage: userMileage,
			car_model: model,
		};

		if (!payload.vin_number) {
			handleError("Please enter the VIN number.");
			return;
		}

		if (!payload.user_predicted_mileage) {
			handleError("Please enter the mileage.");
			return;
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
				handleError(result.message);
			} else {
				handleError(result.error);
			}
		} catch (error) {
			console.error("Error updating car details:", error);
			handleError("Failed to update car details. Please try again.");
		}
	};

	return (
		<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
			<div>
				<Button
					variant="text"
					color="primary"
					className="underline text-blue-600 hover:text-blue-800"
					onClick={handleOpen}
				>
					Submit Mileage
				</Button>

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

							{!user ? (
								<Button
									variant="contained"
									color="primary"
									onClick={login}
									className="w-full"
								>
									Log in with Google
								</Button>
							) : (
								<Typography variant="h6">Welcome, {user.name}!</Typography>
							)}

							{result && (
								<Typography variant="h6" className="text-gray-800">
									{result}
								</Typography>
							)}
						</Box>
					</DialogContent>

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

				<Snackbar
					open={!!snackbarMessage}
					autoHideDuration={6000}
					onClose={() => setSnackbarMessage("")}
					message={snackbarMessage}
				/>
			</div>
		</GoogleOAuthProvider>
	);
}
