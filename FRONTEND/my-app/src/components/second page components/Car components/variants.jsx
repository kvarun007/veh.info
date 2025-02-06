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
	Divider,
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
			if (selectedTransmission === "Manual") {
				setData(
					vehicleData.filter(
						(item) => item.key_transmission.trim() === "Manual"
					)
				);
			} else if (selectedTransmission === "Automatic") {
				setData(
					vehicleData.filter(
						(item) =>
							item.key_transmission.trim() === "AMT" ||
							item.key_transmission.trim() === "Automatic"
					)
				);
			} else {
				setData(vehicleData);
			}
		} else if (newValue === 1) {
			if (selectedTransmission === "Manual") {
				setData(
					vehicleData
						.filter((item) => item.key_transmission.trim() === "Manual")
						.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			} else if (selectedTransmission === "Automatic") {
				setData(
					vehicleData
						.filter(
							(item) =>
								item.key_transmission.trim() === "AMT" ||
								item.key_transmission.trim() === "Automatic"
						)
						.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			} else {
				setData(
					vehicleData.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			}
		} else {
			if (selectedTransmission === "Manual") {
				setData(
					vehicleData
						.filter((item) => item.key_transmission.trim() === "Manual")
						.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			} else if (selectedTransmission === "Automatic") {
				setData(
					vehicleData
						.filter(
							(item) =>
								item.key_transmission.trim() === "AMT" ||
								item.key_transmission.trim() === "Automatic"
						)
						.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			} else {
				setData(
					vehicleData.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			}
		}
		setTabValue(newValue);
	};

	const handleTransmissionChange = (event) => {
		if (event.target.value == "Manual") {
			if (tabValue === 1) {
				setData(
					vehicleData
						.filter((item) => item.key_transmission.trim() === "Manual")
						.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			} else if (tabValue === 2) {
				setData(
					vehicleData
						.filter((item) => item.key_transmission.trim() === "Manual")
						.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			} else {
				setData(
					vehicleData.filter(
						(item) => item.key_transmission.trim() === "Manual"
					)
				);
			}
		} else if (event.target.value == "Automatic") {
			if (tabValue === 1) {
				setData(
					vehicleData
						.filter(
							(item) =>
								item.key_transmission.trim() === "AMT" ||
								item.key_transmission.trim() === "Automatic"
						)
						.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			} else if (tabValue === 2) {
				setData(
					vehicleData
						.filter(
							(item) =>
								item.key_transmission.trim() === "AMT" ||
								item.key_transmission.trim() === "Automatic"
						)
						.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			} else {
				setData(
					vehicleData.filter((item) => item.key_transmission.trim() === "AMT")
				);
			}
		} else {
			if (tabValue === 1) {
				setData(
					vehicleData.filter((item) => item.fuel_type.trim() === "Petrol")
				);
			} else if (tabValue === 2) {
				setData(
					vehicleData.filter((item) => item.fuel_type.trim() === "Diesel")
				);
			} else {
				setData(vehicleData);
			}
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
			<div className="flex-1 w-[90%] justify-self-center bg-white   space-y-4 mt-4 rounded-2xl shadow-2xl">
				<Box className="ml-[2%] px-6 pt-6">
					<Typography
						variant="h4"
						className="text-gray-800 font-bold text-3xl md:text-4xl mb-2 "
					>
						{vehicleData[0].make} {vehicleData[0].model} price
					</Typography>
					<Typography variant="subtitle1" className="text-gray-600 text-lg">
						Explore the variants and features of the {vehicleData[0].make}{" "}
						{vehicleData[0].model}.
					</Typography>
					<Divider className="my-4" />

					{/* Tabs */}

					{fuelType.length > 1 ? (
						<div className="">
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
							className="mt-4 "
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
