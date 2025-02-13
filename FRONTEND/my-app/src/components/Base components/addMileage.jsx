import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Button } from "@mui/material";

export default function AddMileage() {
	const [mileageInput, setMileageInput] = useState("");

	const [vehicleType, setVehicleType] = useState(""); // "car" or "bike"
	const [selectedVehicleBrand, setSelectedVehicleBrand] = useState(""); // Selected vehicle
	const [selectedVehicleModel, setSelectedVehicleModel] = useState(""); // selcted vechile model
	const [selectedVehicleVersion, setSelectedVehicleVersion] = useState(""); // selcted vechile version

	const [vehicleOptions, setVehicleOptions] = useState([]); // Options for selected type
	const [vehicleModel, setVehicleModel] = useState([]); //To store the vehicle model
	const [vehicleVersion, setVehicleVersion] = useState([]); //To store the vehicle version

	const [userEnteredMileage, setUserEnteredMileage] = useState("");
	const [userDetails, setUserDetails] = useState(null);

	const fetchVehicleBrand = async (type) => {
		try {
			const endpoint =
				type === "car"
					? "http://127.0.0.1:8000/details/getallcarsdetails"
					: "http://127.0.0.1:8000/details/getallbikesbrands";
			const response = await fetch(endpoint);
			const data = await response.json();
			// console.log(Object.values(data)[0]);
			setVehicleOptions(Object.values(data)[0]); // Assume data is an array of vehicles
		} catch (error) {
			console.error("Error fetching vehicle options:", error);
		}
	};
	const fetchVehicleModel = async (brand) => {
		try {
			const endpoint =
				vehicleType === "car"
					? `http://127.0.0.1:8000/car/modeldetails/?brand=${brand}`
					: `http://127.0.0.1:8000/bike/modeldetails/?brand=${brand}`;
			const response = await fetch(endpoint);
			const result = await response.json();
			setVehicleModel(Object.values(result)[0]);
			console.log(Object.values(result)[0]);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const fetchVehicleVersion = async (model) => {
		try {
			const endpoint =
				vehicleType === "car"
					? `http://127.0.0.1:8000/car/versiondetails/?brand=${selectedVehicleBrand}&model=${model}`
					: `http://127.0.0.1:8000/bike/versiondetails/?brand=${selectedVehicleBrand}&model=${model}`;
			const response = await fetch(endpoint);
			const result = await response.json();
			setVehicleVersion(Object.values(result)[0]);
			console.log(Object.values(result)[0]);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleSuccess = async (response) => {
		const { credential } = response;

		if (credential) {
			// console.log("fetching data from the google api");
			const decodedUser = jwtDecode(credential); // Decode JWT
			setUserDetails(decodedUser);
			console.log("Decoded User:", decodedUser.email);
			// setUser(decodedUser);
		}
	};

	const handleFailure = (error) => {
		alert("failed login to google");
	};

	const handleMileageSubmit = async () => {
		try {
			const response = await fetch(
				"http://127.0.0.1:8000/api/vehicles/add-mileage/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						vehicleType: vehicleType,
						brand: selectedVehicleBrand,
						model: selectedVehicleModel,
						version: selectedVehicleVersion,
						mileage: userEnteredMileage,
						email: userDetails.email,
					}),
				}
			);
			if (response.ok) {
				alert("Mileage added successfully!");
				// setOpenMileageModal(false);
			} else {
				alert("Failed to add mileage.");
			}
		} catch (error) {
			console.error("Error adding mileage:", error);
			alert("An error occurred.");
		}
	};
	return (
		<>
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
					borderRadius: 2,
				}}
			>
				<Typography id="add-mileage-title" variant="h6">
					Add Mileage
				</Typography>

				<TextField
					select
					fullWidth
					margin="normal"
					label="Select Vehicle Type"
					value={vehicleType}
					onChange={(e) => {
						setVehicleType(e.target.value);
						setSelectedVehicleBrand(""); // Reset brand
						setVehicleModel([]); // Reset models list
						setSelectedVehicleModel(""); // Reset model
						setVehicleVersion([]); // Reset versions list
						setSelectedVehicleVersion(""); // Reset version
						if (e.target.value) {
							fetchVehicleBrand(e.target.value);
						}
					}}
					SelectProps={{
						native: true,
					}}
				>
					<option value="">Select</option>
					<option value="car">Car</option>
					<option value="bike">Bike</option>
				</TextField>

				{vehicleType && (
					<TextField
						select
						fullWidth
						margin="normal"
						label="Select Brand"
						value={selectedVehicleBrand}
						onChange={(e) => {
							setSelectedVehicleBrand(e.target.value);
							setSelectedVehicleModel(""); // Reset model
							setVehicleVersion([]); // Reset versions list
							setSelectedVehicleVersion(""); // Reset version

							if (e.target.value) {
								fetchVehicleModel(e.target.value);
							}
						}}
						SelectProps={{
							native: true,
						}}
					>
						<option value="">Select</option>
						{vehicleOptions.map((option) =>
							vehicleType === "car" ? (
								<option key={option.version} value={option.version}>
									{`${option.make}  `}
									{/* ${option.version} */}
								</option>
							) : (
								<option key={option.version} value={option.version}>
									{`${option.make} `}
									{/* ${option.version} */}
								</option>
							)
						)}
					</TextField>
				)}

				<Box sx={{ display: "flex", gap: 2 }}>
					{selectedVehicleBrand && (
						<TextField
							select
							fullWidth
							margin="normal"
							label="Select model"
							value={selectedVehicleModel}
							onChange={(e) => {
								setSelectedVehicleModel(e.target.value);
								setVehicleVersion([]); // Reset versions list
								setSelectedVehicleVersion(""); // Reset version
								if (e.target.value) {
									fetchVehicleVersion(e.target.value);
								}
							}}
							SelectProps={{
								native: true,
							}}
							sx={{ width: "50%" }}
						>
							<option value="">Select</option>
							{vehicleModel.map((option) => (
								<option key={option.model} value={option.model}>
									{`${option.model}  `}
									{/* ${option.version} */}
								</option>
							))}
						</TextField>
					)}

					{selectedVehicleModel && (
						<TextField
							select
							fullWidth
							margin="normal"
							label="Select version"
							value={selectedVehicleVersion}
							onChange={(e) => {
								setSelectedVehicleVersion(e.target.value);
							}}
							SelectProps={{
								native: true,
							}}
							sx={{ width: "50%" }}
						>
							<option value="">Select</option>
							{vehicleVersion.map((option) => (
								<option key={option.version} value={option.version}>
									{`${option.version}  `}
									{/* ${option.version} */}
								</option>
							))}
						</TextField>
					)}
				</Box>
				{selectedVehicleVersion && (
					<TextField
						id="outlined-basic"
						label="Enter Mileage"
						variant="outlined"
						sx={{ width: "100%" }}
						value={userEnteredMileage}
						onChange={(e) => {
							setUserEnteredMileage(e.target.value);
						}}
					></TextField>
				)}
				{userEnteredMileage && (
					<GoogleLogin
						onSuccess={handleSuccess}
						onError={handleFailure}
						useOneTap={false}
					/>
				)}

				{userDetails && (
					<Button
						variant="contained"
						sx={{ width: "100%" }}
						onClick={handleMileageSubmit}
					>
						submit
					</Button>
				)}
			</Box>
		</>
	);
}
