import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useVehicleType } from "./VehicleTypeContext";
import { useSelector, useDispatch } from "react-redux";

export default function VehicleTypeButtons() {
	// const { vehicleType, setVehicleType } = useVehicleType("all");
	const [bikeClicked, setBikeClicked] = React.useState(false);
	const [carClicked, setCarClicked] = React.useState(false);

	//redux
	const vehicleType = useSelector((state) => state.vehicleType);
	const dispatch = useDispatch();
	const setBike = () => dispatch({ type: "bike" });
	const setCar = () => dispatch({ type: "car" });
	const setAllVehicle = () => dispatch({ type: "all" });

	function toggleButton(buttonType) {
		if (buttonType.type === "bike") {
			setBikeClicked((prev) => !prev);
			changeVehicleType(buttonType.type);
		} else if (buttonType.type === "car") {
			setCarClicked((prev) => !prev);
			changeVehicleType(buttonType.type);
		}
	}

	function changeVehicleType(buttonType) {
		if (buttonType === "bike") {
			if (vehicleType === "all") {
				// setVehicleType("bike");
				setBike();
			} else if (vehicleType === "bike") {
				// setVehicleType("all");
				setAllVehicle();
			} else if (vehicleType === "car") {
				setBikeClicked(true);
				setCarClicked(false);
				// setVehicleType("bike");
				setBike();
			}
		} else if (buttonType === "car") {
			if (vehicleType === "all") {
				// setVehicleType("car");
				setCar();
			} else if (vehicleType === "car") {
				// setVehicleType("all");
				setAllVehicle();
			} else if (vehicleType === "bike") {
				setBikeClicked(false);
				setCarClicked(true);
				// setVehicleType("car");
				setCar();
			}
		}
	}

	return (
		<div className="ml-[11%]">
			<Stack spacing={2} direction="row">
				<Button
					variant={bikeClicked ? "contained" : "outlined"}
					onClick={() => toggleButton({ type: "bike" })}
					className="w-32"
				>
					Bikes
				</Button>
				<Button
					variant={carClicked ? "contained" : "outlined"}
					onClick={() => toggleButton({ type: "car" })}
					className="w-32"
				>
					cars
				</Button>
			</Stack>
		</div>
	);
}
