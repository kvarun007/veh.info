import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography,
	Box,
} from "@mui/material";

export default function EMIModal({ price }) {
	const [open, setOpen] = useState(false);
	const [principal, setPrincipal] = useState(parseFloat(price) * 100000 || "");
	const [rate, setRate] = useState("");
	const [tenure, setTenure] = useState("");
	const [emi, setEmi] = useState(null);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setPrincipal("");
		setRate("");
		setTenure("");
		setEmi(null);
	};

	const calculateEMI = () => {
		const P = parseFloat(principal);
		const R = parseFloat(rate) / 12 / 100;
		const N = parseInt(tenure, 10);
		const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
		setEmi(emi.toFixed(2));
	};

	return (
		<div>
			{/* Button to Open the Modal */}
			<Button
				variant="contained"
				color="primary"
				onClick={handleOpen}
				variant="text"
				color="primary"
				className="underline text-blue-600 hover:text-blue-800"
			>
				Calculate EMI
			</Button>

			{/* Modal (Dialog) */}
			<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
				<DialogTitle>
					<Typography variant="h5" className="font-bold">
						EMI Calculator
					</Typography>
				</DialogTitle>

				<DialogContent>
					<Box className="space-y-4">
						{/* Loan Amount */}
						<TextField
							label="Loan Amount"
							variant="outlined"
							fullWidth
							type="number"
							value={principal}
							onChange={(e) => setPrincipal(e.target.value)}
						/>

						{/* Interest Rate */}
						<TextField
							label="Annual Interest Rate (%)"
							variant="outlined"
							fullWidth
							type="number"
							value={rate}
							onChange={(e) => setRate(e.target.value)}
						/>

						{/* Tenure */}
						<TextField
							label="Tenure (in months)"
							variant="outlined"
							fullWidth
							type="number"
							value={tenure}
							onChange={(e) => setTenure(e.target.value)}
						/>

						{/* EMI Result */}
						{emi && (
							<Typography variant="h6" className="text-gray-800">
								Monthly EMI: ₹{emi}
							</Typography>
						)}
					</Box>
				</DialogContent>

				{/* Modal Actions */}
				<DialogActions>
					<Button onClick={calculateEMI} variant="contained" color="primary">
						Calculate EMI
					</Button>
					<Button onClick={handleClose} variant="outlined" color="secondary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
