import { useParams } from "react-router-dom";
import ImageSlider from "../Car components/imageSlider";
import React, { useState, useEffect, useRef } from "react";
import SafetyFeatures from "../Car components/safetyFeatures";
import Variants from "../Car components/variants";
import OnRoadPriceCard from "../Common components/onRoadPrice";
import ImageSliderBike from "../Bike components/ImageSliderBike";
import BasicBikeFeatures from "../Bike components/BasicBikeFeatures";
import VariantsBike from "../Bike components/variantsBike";

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

	//THE BELOW SECTION CALCUATE THE HEIGHT OF THE VEHICLE DETAILS SECTION AND STORE IT IN THE VEHICLEDETAILSTATE AND SEND TO THE CORRESPONDING DIV IN THE FELX BOX
	const vehicleDetailsRef = useRef(null);
	const [vehicleDetailsHeight, setVehicleDetailsHeight] = useState(0);

	useEffect(() => {
		if (vehicleDetailsRef.current) {
			setVehicleDetailsHeight(vehicleDetailsRef.current.offsetHeight);
		}
	}, [vehicleData]);

	return vehicleData && vehicleData[0].vehicle_type === "car" ? (
		<div className="  w-100%  bg-[#F9F9F9]">
			<div className=" empty div bg-[#141B29] min-h-16"> dfadfedfsa</div>

			<ImageSlider vehicleData={vehicleData} />

			<div className="mt-4 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9]  ">
				<div className="flex-[2] " ref={vehicleDetailsRef}>
					<SafetyFeatures vehicleData={vehicleData} />
					<Variants vehicleData={vehicleData} />
				</div>
				<div
					className="flex-[1]  rounded-2xl shadow-2xl overflow-x-auto "
					style={{ height: `${vehicleDetailsHeight}px` }}
				>
					<OnRoadPriceCard
						vehicleData={vehicleData}
						// child1Height={child1Height}
					/>
				</div>
			</div>
		</div>
	) : (
		<div className=" w-100%  bg-[#F9F9F9]">
			<div className=" empty div bg-[#141B29] min-h-16"> dfadfedfsa</div>
			{/* <ResponsiveAppBar /> */}
			{/* <div className="py-4 px-4 md:px-6 flex flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-1 bg-[#F9F9F9]"> */}
			<ImageSliderBike vehicleData={vehicleData} />
			{/* </div> */}
			<div className="mt-4 flex flex-col md:flex-row lg:flex-row space-y-6  md:space-y-0 md:space-x-1 bg-[#F9F9F9] ">
				<div className="flex-[2]" ref={vehicleDetailsRef}>
					<BasicBikeFeatures vehicleData={vehicleData} />
					<VariantsBike vehicleData={vehicleData} />
				</div>
				<div
					className="flex-[1] rounded-2xl shadow-2xl overflow-x-auto"
					style={{ height: `${vehicleDetailsHeight}px` }}
				>
					<OnRoadPriceCard vehicleData={vehicleData} />
				</div>
			</div>
		</div>
	);
}
