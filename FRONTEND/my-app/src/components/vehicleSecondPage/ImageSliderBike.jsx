import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from "react";
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

export default function ImageSliderBike({ vehicleData }) {
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
			parseFloat(item.ex_showroom_price_in_mumbai)
		);
		priceArray = [...new Set(priceArray)];
		priceArray = priceArray.sort((a, b) => a - b); // Sorting in ascending order
		setPrice(priceArray);
	}

	function Cal_Mileage_Range(data) {
		let mileageArray = data.map((item) =>
			parseFloat(item.mileage_owner_reported.replace("kmpl", "").trim())
		);
		mileageArray = [...new Set(mileageArray)];
		mileageArray = mileageArray.sort((a, b) => a - b);
		setMileage(mileageArray);
	}
	function Cal_Engine_Range(data) {
		let engineArray = data.map((item) =>
			parseFloat(item.displacement.replace("cc", "").trim())
		);
		engineArray = [...new Set(engineArray)];
		engineArray = engineArray.sort((a, b) => a - b);
		setEngine(engineArray);
	}
	function fuel_type(data) {
		let fuel_type_Array = data.map((item) => item.fuel_type);
		fuel_type_Array = [...new Set(fuel_type_Array)];
		setFuelType(fuel_type_Array);
	}
	function Power_range(data) {
		let max_power_Array = data.map((item) =>
			parseFloat(item.max_power.replace("rpm", "").trim())
		);
		max_power_Array = [...new Set(max_power_Array)];
		max_power_Array = max_power_Array.sort((a, b) => a - b);
		setMaxpower(max_power_Array);
	}
	function Torque_range(data) {
		let torque_Array = data.map((item) =>
			parseFloat(item.max_torque.replace("Nm", "").trim())
		);
		torque_Array = [...new Set(torque_Array)];
		torque_Array = torque_Array.sort((a, b) => a - b);
		setMaxTorque(torque_Array);
	}

	useEffect(() => {
		if (vehicleData) {
			if (vehicleData.length > 0 && vehicleData[0]?.image_url) {
				const splittedUrls = vehicleData[0].image_url.split(";");
				const formattedImages = splittedUrls.map((imgUrl) => ({
					url: imgUrl.trim(),
				}));
				setImages(formattedImages);
			}
			Cal_Price_Range(vehicleData);
			Cal_Mileage_Range(vehicleData);
			Cal_Engine_Range(vehicleData);
			fuel_type(vehicleData);
			Power_range(vehicleData);
			Torque_range(vehicleData);
		}
	}, [vehicleData]);

	return (
		<>
			{/* Image Slider Section */}

			<div className="flex-[2]">
				{images.length > 0 ? (
					<div className="p-4 bg-white rounded-lg shadow-md border border-[#1976D2] ">
						<div className="w-full aspect-w-16 aspect-h-9">
							<SimpleImageSlider
								width="100%"
								height="100%"
								images={images}
								showBullets={true}
								showNavs={true}
								style={{
									maxWidth: "100%",
									maxHeight: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				) : (
					<div className="text-center text-[#1976D2] bg-white p-4 rounded-lg shadow-md border border-[#1976D2]">
						Loading images...
					</div>
				)}
			</div>

			{/* Vehicle Data Section */}
			<div className="flex-[1] bg-white p-6 rounded-lg shadow-md border border-[#1976D2]">
				{vehicleData ? (
					<div className="space-y-4">
						<h1 className="text-2xl font-bold text-[#1976D2]  text-center">
							{vehicleData[0].make} {vehicleData[0].model}
						</h1>
						<div className="space-y-4">
							{price ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaDollarSign className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">Price Range:</strong>
									</div>
									<div>
										{price.length > 1 ? (
											<div>
												{price[0]} - {price[price.length - 1]} Lakh{" "}
											</div>
										) : (
											<div>{price[0]} Lakh</div>
										)}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading price...</div>
							)}

							{mileage ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaTachometerAlt className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">
											Mileage Range (ARAI):
										</strong>
									</div>
									<div>
										{mileage.length > 1 ? (
											<div>
												{mileage[0]} - {mileage[mileage.length - 1]} kmpl{" "}
											</div>
										) : (
											<div>{mileage[0]} kmpl</div>
										)}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading mileage...</div>
							)}

							{engine ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<PiEngineFill className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">Engine:</strong>
									</div>
									<div>
										{engine.length > 1 ? (
											<div>
												{engine[0]} - {engine[engine.length - 1]} CC{" "}
											</div>
										) : (
											<div>{engine[0]} CC </div>
										)}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading engine...</div>
							)}

							{maxpower ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaBolt className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">Power:</strong>
									</div>
									<div>
										{maxpower.length > 1 ? (
											<div>
												{maxpower[0]} - {maxpower[maxpower.length - 1]} bhp{" "}
											</div>
										) : (
											<div>{maxpower[0]} bhp </div>
										)}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading engine...</div>
							)}

							{maxTorque ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaCog className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">Torque:</strong>
									</div>
									<div>
										{maxTorque.length > 1 ? (
											<div>
												{maxTorque[0]} - {maxTorque[maxTorque.length - 1]} Nm{" "}
											</div>
										) : (
											<div>{maxTorque[0]} Nm </div>
										)}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading engine...</div>
							)}

							{fuelType ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaGasPump className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">Fuel Type:</strong>
									</div>
									<div>
										{fuelType.map((item, index) => (
											<span key={index}>
												{item}
												{index < fuelType.length - 1 && "/"}
											</span>
										))}
									</div>
								</div>
							) : (
								<div className="text-gray-500">Loading fuel type...</div>
							)}

							{vehicleData[0].key_seating_capacity ? (
								<div className="text-xl font-medium text-gray-700 flex justify-between items-center">
									<div className="flex items-center">
										<FaUsers className="mr-2 text-[#1976D2]" />
										<strong className="text-[#1976D2]">
											Seating Capacity:
										</strong>
									</div>
									<div>{vehicleData[0].key_seating_capacity}</div>
								</div>
							) : (
								<div className="text-gray-500">Loading seating capacity...</div>
							)}
						</div>
					</div>
				) : (
					<div className="text-gray-500">Loading vehicle data...</div>
				)}
			</div>
		</>
	);
}
