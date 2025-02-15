import Button from "@mui/material/Button";

const handleAddToGarage = async () => {};
export default function AddToGarage({ vehicleData }) {
	console.log(vehicleData);
	return (
		<>
			<Button
				variant="contained"
				sx={{ width: "100%", bgcolor: "#2563EB" }}
				onClick={handleAddToGarage}
			>
				ADD TO GARAGE
			</Button>
		</>
	);
}
