import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from "react";

export default function ImageSlider({ vehicleData }) {
	const [images, setImages] = useState([]);
	const [price, setPrice] = useState(null);

	// Function to calculate price range
	function Cal_Price_Range(data) {
		let priceArray = data.map((item) => {
			return parseFloat(item.price.replace("?", "").replace("Lakh", "").trim());
		});
		priceArray = priceArray.sort((a, b) => a - b); // Sorting in ascending order
		setPrice(priceArray);
	}

	useEffect(() => {
		if (vehicleData) {
			// Process images and price when vehicleData updates
			if (vehicleData.length > 0 && vehicleData[0]?.image_url) {
				const splittedUrls = vehicleData[0].image_url.split(";");
				const formattedImages = splittedUrls.map((imgUrl) => ({
					url: imgUrl.trim(),
				}));
				setImages(formattedImages);
			}
			Cal_Price_Range(vehicleData);
		}
	}, [vehicleData]);

	return (
		<div className="mt-10 py-8 px-2 flex flex-col md:flex-row space-x-6">
			{/* Image Slider Section */}
			<div className="flex-1">
				{images.length > 0 ? (
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
				) : (
					// Placeholder or loading state
					<div className="text-gray-500">Loading images...</div>
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
