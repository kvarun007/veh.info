import React, { useState, useEffect } from "react";
import VariantsList from "./variantsList";
import {
	Box,
	Card,
	CardContent,
	Typography,
	Tab,
	Tabs,
	Radio,
	RadioGroup,
	FormControlLabel,
} from "@mui/material";
import "tailwindcss/tailwind.css";

export default function Variants({ vehicleData }) {
	const [tabValue, setTabValue] = useState(0);
	const [fuelType, setFuelType] = useState([]);
	const [transmissionType, setTransmissionType] = useState([]);
	const [selectedTransmission, setSelectedTransmission] = useState("All");
	const [data, setData] = useState(null);

	const handleTabChange = (event, newValue) => {
		if (newValue === 0) {
			setData(vehicleData);
		} else if (newValue === 1) {
			setData(vehicleData.filter((item) => item.fuel_type.trim() === "Petrol"));
		} else {
			setData(vehicleData.filter((item) => item.fuel_type.trim() === "Diesel"));
		}
		setTabValue(newValue);
	};

	const handleTransmissionChange = (event) => {
		if (event.target.value == "Manual") {
			setData(
				vehicleData.filter((item) => item.key_transmission.trim() === "Manual")
			);
		} else if (event.target.value == "Automatic") {
			setData(
				vehicleData.filter((item) => item.key_transmission.trim() === "AMT")
			);
		} else if (event.target.value == "Automatic") {
			setData(
				vehicleData.filter(
					(item) => item.key_transmission.trim() === "Automatic"
				)
			);
		} else {
			setData(vehicleData);
		}
		setSelectedTransmission(event.target.value);
	};

	// Fetch fuel types
	const fetchFuelTypes = () => {
		const fuelTypes = vehicleData
			.filter((item) => item.fuel_type)
			.map((item) => item.fuel_type.trim());

		setFuelType([...new Set(fuelTypes)]);
	};

	// Fetch transmission types
	const fetchTransmissionTypes = () => {
		const transmissionTypes = vehicleData
			.filter((item) => item.key_transmission)
			.map((item) => item.key_transmission.trim());

		// Normalize AMT as "Automatic"
		const normalizedTypes = transmissionTypes.map((type) =>
			type === "AMT" ? "Automatic" : type
		);
		setTransmissionType([...new Set(normalizedTypes)]);
		console.log(transmissionType);
	};

	useEffect(() => {
		if (vehicleData && vehicleData.length > 0) {
			setData(vehicleData);
			fetchFuelTypes();
			fetchTransmissionTypes();
		}
	}, [vehicleData]);

	// Handle cases where vehicleData is unavailable or empty
	if (!vehicleData || vehicleData.length === 0) {
		return <Typography>No vehicle data available.</Typography>;
	}

	return (
		<>
			<div className="flex-1 md:w-3/4 bg-white p-6 rounded-lg shadow-md border border-[#1976D2] space-y-4 mt-4">
				<Box>
					<Card className="mb-6 shadow-lg">
						<CardContent>
							<Typography variant="h4" className="text-gray-800 font-bold">
								{vehicleData[0].make} {vehicleData[0].model} price
							</Typography>
						</CardContent>
					</Card>

					{/* Tabs */}

					{fuelType.length > 1 ? (
						<div className="ml-[2%]">
							<Tabs
								value={tabValue}
								onChange={handleTabChange}
								className="mb-6"
							>
								<Tab label="All" />
								{fuelType.map((type, index) => (
									<Tab key={index} label={type} />
								))}
							</Tabs>
						</div>
					) : null}

					{/* Radio Buttons for Transmission */}
					{transmissionType.length > 0 && (
						<RadioGroup
							row
							value={selectedTransmission}
							onChange={handleTransmissionChange}
							className="mt-4 ml-[2%]"
						>
							{transmissionType.length > 1 && (
								<FormControlLabel value="All" control={<Radio />} label="All" />
							)}

							{transmissionType.length < 2 ? null : (
								<div>
									{transmissionType.map((type) => (
										<FormControlLabel
											key={type}
											value={type}
											control={<Radio />}
											label={type}
										/>
									))}
								</div>
							)}
						</RadioGroup>
					)}
				</Box>
				<VariantsList data={data} />
			</div>
		</>
	);
}
