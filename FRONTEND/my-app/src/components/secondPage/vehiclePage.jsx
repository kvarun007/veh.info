import { useParams } from "react-router-dom";
import ResponsiveAppBar from "./toolBar";
import ImageSlider from "./imageSlider";
import React, { useState, useEffect } from "react";
import SafetyFeatures from "./safetyFeatures";
import Variants from "./variants";
import OnRoadPriceCard from "./onRoadPrice";
import EMICalculator from "./emiCal";
import ImageSliderBike from "../vehicleSecondPage/ImageSliderBike";
import BasicBikeFeatures from "../vehicleSecondPage/BasicBikeFeatures";
import VariantsBike from "../vehicleSecondPage/variantsBike";

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
			console.log(result.vehicle);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchAllVehicles();
	}, [params.vehicleModel]);

	return vehicleData && vehicleData[0].vehicle_type === "car" ? (
		<div className="mt-10 mx-[5%] w-100%  bg-[#F9F9F9]">
			<ResponsiveAppBar />
			<div className="mt-10 py-4 px-4 md:px-6 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9]">
				<ImageSlider vehicleData={vehicleData} />
			</div>
			<div className="mt-10  flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9] ">
				<div className="flex-[2]">
					<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
						<SafetyFeatures vehicleData={vehicleData} />
					</div>
					<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
						<Variants vehicleData={vehicleData} />
					</div>
				</div>
				<div className="flex-[1]">
					<OnRoadPriceCard vehicleData={vehicleData} />
				</div>
			</div>
		</div>
	) : (
		<div className="mt-10 mx-[5%] w-100%  bg-[#F9F9F9]">
			<ResponsiveAppBar />
			<div className="mt-10 py-4 px-4 md:px-6 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9]">
				<ImageSliderBike vehicleData={vehicleData} />
			</div>
			<div className="mt-10  flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9] ">
				<div className="flex-[2]">
					<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
						<BasicBikeFeatures vehicleData={vehicleData} />
					</div>
					<div className=" px-2 md:px-6 bg-[#F9F9F9] ">
						<VariantsBike vehicleData={vehicleData} />
					</div>
				</div>
				<div className="flex-[1]">
					<OnRoadPriceCard vehicleData={vehicleData} />
				</div>
			</div>
		</div>
	);
}
