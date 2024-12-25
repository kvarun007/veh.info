import { useParams } from "react-router-dom";
import ResponsiveAppBar from "./toolBar";
import ImageSlider from "./imageSlider";
import React, { useState, useEffect } from "react";
import SafetyFeatures from "./safetyFeatures";
import Variants from "./variants";

export default function VehiclePages() {
	const params = useParams();
	// console.log(params.userId);

	const [vehicleData, setVehicleData] = useState();

	const fetchAllVehicles = async () => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/details/${params.vehicleModel}/`
			);
			const result = await response.json();
			setVehicleData(result.vehicle);
			// console.log(result.vehicle);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchAllVehicles();
	}, [params.vehicleModel]);

	return (
		<div className="mt-10 mx-[5%] w-100% ">
			<ResponsiveAppBar />

			<div className="mt-10 py-4 px-4 md:px-6 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9]">
				<ImageSlider vehicleData={vehicleData} />
			</div>

			<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
				<SafetyFeatures vehicleData={vehicleData} />
			</div>
			<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
				<Variants vehicleData={vehicleData} />
			</div>
		</div>
	);
}
