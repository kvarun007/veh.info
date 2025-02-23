import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from "react";
import AddToGarage from "../Common components/AddToGarage";
import {
	FaDollarSign,
	FaGasPump,
	FaCar,
	FaTachometerAlt,
	FaUsers,
	FaBolt,
	FaCog,
} from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";

export default function ImageSlider({ vehicleData }) {
	const [images, setImages] = useState([]);
	const [price, setPrice] = useState(null);
	const [mileage, setMileage] = useState(null);
	const [engine, setEngine] = useState(null);
	const [fuelType, setFuelType] = useState(null);
	const [maxpower, setMaxpower] = useState(null);
	const [maxTorque, setMaxTorque] = useState(null);

	// Function to calculate price range
	function Cal_Price_Range(data) {
		let priceArray = data.map((item) =>
			parseFloat(item.price.replace("?", "").replace("Lakh", "").trim())
		);
		priceArray = [...new Set(priceArray)].sort((a, b) => a - b);
		setPrice(priceArray);
	}

	function Cal_Mileage_Range(data) {
		let mileageArray = data.map((item) =>
			parseFloat(item.mileage_arai_field.replace("kmpl", "").trim())
		);
		mileageArray = [...new Set(mileageArray)].sort((a, b) => a - b);
		setMileage(mileageArray);
	}

	function Cal_Engine_Range(data) {
		let engineArray = data.map((item) =>
			parseFloat(item.key_engine.replace("cc", "").trim())
		);
		engineArray = [...new Set(engineArray)].sort((a, b) => a - b);
		setEngine(engineArray);
	}

	function fuel_type(data) {
		let fuel_type_Array = [...new Set(data.map((item) => item.key_fuel_type))];
		setFuelType(fuel_type_Array);
	}

	function Power_range(data) {
		let max_power_Array = data.map((item) =>
			parseFloat(item.max_power.replace("rpm", "").trim())
		);
		max_power_Array = [...new Set(max_power_Array)].sort((a, b) => a - b);
		setMaxpower(max_power_Array);
	}

	function Torque_range(data) {
		let torque_Array = data.map((item) =>
			parseFloat(item.max_torque.replace("Nm", "").trim())
		);
		torque_Array = [...new Set(torque_Array)].sort((a, b) => a - b);
		setMaxTorque(torque_Array);
	}

	useEffect(() => {
		console.log("Vehicle Data:", vehicleData);
		if (vehicleData && vehicleData.length > 0) {
			const vehicle = vehicleData[0];
			const formattedImages = vehicle.image_url
				.split(";")
				.map((imgUrl) => ({ url: imgUrl.trim() }));
			setImages(formattedImages);

			Cal_Price_Range(vehicleData);
			Cal_Mileage_Range(vehicleData);
			Cal_Engine_Range(vehicleData);
			fuel_type(vehicleData);
			Power_range(vehicleData);
			Torque_range(vehicleData);
		}
	}, [vehicleData]);

	return (
		// <div className="flex flex-col md:flex-row lg:flex-row gap-6 p-6 bg-gray-50 rounded-xl shadow-lg">
		<div className=" py-4 px-4 mx-8 md:px-6 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-4 bg-[#F9F9F9]">
			<div className="flex-[2] rounded-3xl shadow-2xl flex items-center justify-center">
				{images.length > 0 ? (
					// <div className="p-4 bg-white rounded-lg shadow-md border border-[#1976D2] ">
					<div className="w-full aspect-w-16 aspect-h-9  ">
						<SimpleImageSlider
							key={images.length}
							width="100%"
							height="100%"
							images={images}
							showBullets={true}
							showNavs={true}
							style={{
								maxWidth: "100%",
								maxHeight: "100%",
								objectFit: "contain",
								borderRadius: "20px",
							}}
						/>
					</div>
				) : (
					// </div>
					<div className="text-center text-blue-600 p-4">Loading images...</div>
				)}
			</div>

			<div className="flex-1 bg-white p-6 rounded-2xl shadow-2xl">
				{vehicleData ? (
					<div className="space-y-4">
						<h1 className="text-3xl font-bold text-blue-700 text-center">
							{vehicleData[0].make} {vehicleData[0].model}
						</h1>
						<div className="space-y-4 divide-y divide-gray-200 ">
							{[
								{
									icon: FaDollarSign,
									label: "Price Range",
									value:
										price?.length > 1
											? `${price[0]} - ${price[price.length - 1]} Lakh`
											: `${price?.[0]} Lakh`,
								},
								{
									icon: FaTachometerAlt,
									label: "Mileage (ARAI)",
									value:
										mileage?.length > 1
											? `${mileage[0]} - ${mileage[mileage.length - 1]} kmpl`
											: `${mileage?.[0]} kmpl`,
								},
								{
									icon: PiEngineFill,
									label: "Engine",
									value:
										engine?.length > 1
											? `${engine[0]} - ${engine[engine.length - 1]} CC`
											: `${engine?.[0]} CC`,
								},
								{
									icon: FaBolt,
									label: "Power",
									value:
										maxpower?.length > 1
											? `${maxpower[0]} - ${maxpower[maxpower.length - 1]} bhp`
											: `${maxpower?.[0]} bhp`,
								},
								{
									icon: FaCog,
									label: "Torque",
									value:
										maxTorque?.length > 1
											? `${maxTorque[0]} - ${
													maxTorque[maxTorque.length - 1]
											  } Nm`
											: `${maxTorque?.[0]} Nm`,
								},
								{
									icon: FaGasPump,
									label: "Fuel Type",
									value: fuelType?.join(" / "),
								},
								{
									icon: FaUsers,
									label: "Seating Capacity",
									value: vehicleData[0].key_seating_capacity,
								},
							].map(
								({ icon: Icon, label, value }, index) =>
									value && (
										<div
											key={index}
											className="flex items-center justify-between pt-4"
										>
											<div className="flex items-center space-x-2 text-gray-700">
												<Icon className="text-blue-600" />
												<span className="font-medium">{label}:</span>
											</div>
											<div className="text-gray-900 font-semibold">{value}</div>
										</div>
									)
							)}
						</div>
					</div>
				) : (
					<div className="text-center text-gray-500">
						Loading vehicle data...
					</div>
				)}
			</div>
		</div>
	);
}
