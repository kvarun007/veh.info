import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function EMICalculator() {
	const [principal, setPrincipal] = useState("");
	const [rate, setRate] = useState("");
	const [tenure, setTenure] = useState("");
	const [emi, setEmi] = useState(null);

	const calculateEMI = () => {
		const P = parseFloat(principal);
		const R = parseFloat(rate) / 12 / 100;
		const N = parseInt(tenure, 10);
		const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
		setEmi(emi.toFixed(2));
	};

	return (
		<Box className="p-6 space-y-4">
			<Typography variant="h5" className="font-bold">
				EMI Calculator
			</Typography>
			<TextField
				label="Loan Amount"
				variant="outlined"
				fullWidth
				type="number"
				value={principal}
				onChange={(e) => setPrincipal(e.target.value)}
			/>
			<TextField
				label="Annual Interest Rate (%)"
				variant="outlined"
				fullWidth
				type="number"
				value={rate}
				onChange={(e) => setRate(e.target.value)}
			/>
			<TextField
				label="Tenure (in months)"
				variant="outlined"
				fullWidth
				type="number"
				value={tenure}
				onChange={(e) => setTenure(e.target.value)}
			/>
			<Button
				variant="contained"
				color="primary"
				fullWidth
				onClick={calculateEMI}
			>
				Calculate EMI
			</Button>
			{emi && (
				<Typography variant="h6" className="text-gray-800">
					Monthly EMI: ₹{emi}
				</Typography>
			)}
		</Box>
	);
}
