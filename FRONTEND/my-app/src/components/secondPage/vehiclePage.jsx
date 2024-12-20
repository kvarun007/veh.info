import { useParams } from "react-router-dom";
import ResponsiveAppBar from "./toolBar";
import ImageSlider from "./imageSlider";

export default function VehiclePages() {
	const params = useParams();
	// console.log(params.userId);

	return (
		<div className="mt-20 mx-20 w-80% ">
			<ResponsiveAppBar />
			<ImageSlider vehicleModel={params.vehicleModel} />
		</div>
	);
}
