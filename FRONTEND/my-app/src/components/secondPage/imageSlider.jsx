import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from "react";

export default function ImageSlider({ vehicleModel }) {
	const [images, setImages] = useState([]);
	const [price, setPrice] = useState(null);
	const [vehicleData, setVehicleData] = useState();
	const [loading, setLoading] = useState(true); // Track loading state

	// Extract price data from vehicle info and sort
	function Price(data) {
		let priceArray = data.map((item) => {
			return parseFloat(item.price.replace("?", "").replace("Lakh", "").trim());
		});
		priceArray = priceArray.sort((a, b) => a - b); // Sorting in ascending order
		setPrice(priceArray);
	}

	// Fetch vehicle data from API
	const fetchAllVehicles = async () => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/details/${vehicleModel}/`
			);
			const result = await response.json();

			// Handle images URL and format them
			if (result.vehicle && result.vehicle[0]?.image_url) {
				const splittedUrls = result.vehicle[0].image_url.split(";");
				const formattedImages = splittedUrls.map((imgUrl) => ({
					url: imgUrl.trim(),
				}));
				setImages(formattedImages);
			}

			setVehicleData(result.vehicle);
			Price(result.vehicle);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false); // Set loading to false after fetch completes
		}
	};

	useEffect(() => {
		fetchAllVehicles();
	}, [vehicleModel]);

	return (
		<div className="mt-10  py-8 px-2 flex flex-col md:flex-row space-x-6">
			{/* Image Slider Section */}
			<div className="flex-1">
				{loading ? (
					<div className="flex justify-center items-center text-xl text-gray-500">
						<div className="spinner-border animate-spin border-t-4 border-blue-500 w-8 h-8 rounded-full"></div>
						<span className="ml-3">Loading...</span>
					</div>
				) : (
					<SimpleImageSlider
						width={800} // Ensure responsive width for smaller screens
						height={400} // Adjust slider height
						images={images}
						showBullets={true}
						showNavs={true}
						style={{
							objectFit: "cover", // Ensure images fit proportionally
						}}
					/>
				)}
			</div>

			{/* Vehicle Data Section */}
			<div className="flex-1 border p-6 bg-gray-50 rounded-lg">
				{vehicleData ? (
					<div className="space-y-4">
						<h2 className="text-2xl font-bold text-gray-800">
							{vehicleData[0].make} {vehicleData[0].model}
						</h2>
						{price ? (
							<div className="text-xl text-gray-700">
								<strong>Price Range:</strong> {price[0]} -{" "}
								{price[price.length - 1]} Lakh
							</div>
						) : (
							<div className="text-gray-500">Loading price...</div>
						)}
					</div>
				) : (
					<div className="text-gray-500">Loading vehicle data...</div>
				)}
			</div>
		</div>
	);
}
