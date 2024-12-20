import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from "react";

export default function ImageSlider({ vehicleModel }) {
	const [images, setImages] = useState([]);
	const [price, setPrice] = useState(null);
	const [vehicleData, setVehicleData] = useState();
	const [loading, setLoading] = useState(true); // Track loading state

	function Price(data) {
		let priceArray = data.map((item) => {
			return parseFloat(item.price.replace("?", "").replace("Lakh", "").trim());
		});
		priceArray = priceArray.sort();
		console.log(priceArray);
		setPrice(priceArray);
	}
	const fetchAllVehicles = async () => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/details/${vehicleModel}/`
			);
			const result = await response.json();

			if (result.vehicle && result.vehicle[0]?.image_url) {
				const splittedUrls = result.vehicle[0].image_url.split(";");
				const formattedImages = splittedUrls.map((imgUrl) => ({
					url: imgUrl.trim(),
				}));
				setImages(formattedImages);
			}
			setVehicleData(result.vehicle);
			Price(result.vehicle);
			console.log(price);
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
		<div className="mt-10 border py-8 px-2 flex">
			<div>
				{loading ? ( // Show a loader or placeholder while images are loading
					<div>Loading data...</div>
				) : (
					<SimpleImageSlider
						width={800} // Adjust slider width
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

			<div className="justify-items-center border w-full ">
				<div>
					{vehicleData ? (
						<div>
							{vehicleData[0].make} {vehicleData[0].model}
							{price ? (
								<div>
									{price[0]} - {price[price.length - 1]} Lakh
								</div>
							) : (
								<div>loading...</div>
							)}
						</div>
					) : (
						<div>loading...</div>
					)}
				</div>
			</div>
		</div>
	);
}
