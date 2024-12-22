import { useParams } from "react-router-dom";
import ResponsiveAppBar from "./toolBar";
import ImageSlider from "./imageSlider";
import React, { useState, useEffect } from "react";
import Specifications from "./Specifications";
import SafetyFeatures from "./SafetyFeatures";

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

			// // Handle images URL and format them
			// if (result.vehicle && result.vehicle[0]?.image_url) {
			// 	const splittedUrls = result.vehicle[0].image_url.split(";");
			// 	const formattedImages = splittedUrls.map((imgUrl) => ({
			// 		url: imgUrl.trim(),
			// 	}));
			// 	setImages(formattedImages);
			// }

			setVehicleData(result.vehicle);
			// Price(result.vehicle);
			console.log(result.vehicle);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchAllVehicles();
	}, [params.vehicleModel]);

	return (
		<div className="mt-20 mx-20 w-80% ">
			<ResponsiveAppBar />
			<ImageSlider vehicleData={vehicleData} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Specifications vehicleData={vehicleData} />
				{/* <SafetyFeatures vehicleData={vehicleData} /> */}
				{/* Add more sections like Features, Dimensions, etc., here */}
			</div>
		</div>
	);
}
