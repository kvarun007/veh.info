import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useVehicleType } from "./VehicleTypeContext";

export default function VehicleTypeButtons() {
	const { vehicleType, setVehicleType } = useVehicleType("all");
	const [bikeClicked, setBikeClicked] = React.useState(false);
	const [carClicked, setCarClicked] = React.useState(false);

	function toggleButton(buttonType) {
		if (buttonType === "bike") {
			setBikeClicked((prev) => !prev);
			changeVehicleType(buttonType);
		} else if (buttonType === "car") {
			setCarClicked((prev) => !prev);
			changeVehicleType(buttonType);
		}
	}

	function changeVehicleType(buttonType) {
		if (buttonType === "bike") {
			if (vehicleType === "all") {
				setVehicleType("bike");
			} else if (vehicleType === "bike") {
				setVehicleType("all");
			} else if (vehicleType === "car") {
				setBikeClicked(true);
				setCarClicked(false);
				setVehicleType("bike");
			}
		} else if (buttonType === "car") {
			if (vehicleType === "all") {
				setVehicleType("car");
			} else if (vehicleType === "car") {
				setVehicleType("all");
			} else if (vehicleType === "bike") {
				setBikeClicked(false);
				setCarClicked(true);
				setVehicleType("car");
			}
		}
	}

	return (
		<div className="ml-[11%]">
			<Stack spacing={2} direction="row">
				<Button
					variant={bikeClicked ? "contained" : "outlined"}
					onClick={() => toggleButton("bike")}
					className="w-32"
				>
					Bikes
				</Button>
				<Button
					variant={carClicked ? "contained" : "outlined"}
					onClick={() => toggleButton("car")}
					className="w-32"
				>
					cars
				</Button>
			</Stack>
		</div>
	);
}
