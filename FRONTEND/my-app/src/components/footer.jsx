import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { LinkedIn, Instagram, Facebook, Email } from "@mui/icons-material";

export default function Footer() {
	return (
		<Box
			component="footer"
			className="bg-gray-800 text-white py-6"
			sx={{
				position: "static",
				left: "0",
				right: "0",
				bottom: "0",
			}}
		>
			{/* Social Icons */}
			<Box className="flex gap-4 mb-4">
				<IconButton
					href="https://www.linkedin.com/in/varun-kandula/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-blue-500"
				>
					<LinkedIn />
				</IconButton>
				<IconButton
					href="https://www.instagram.com/varun.kandula/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-pink-500"
				>
					<Instagram />
				</IconButton>
				<IconButton
					href="https://www.facebook.com/varun.kandula.79"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-blue-600"
				>
					<Facebook />
				</IconButton>
				<IconButton
					href="mailto:kandula.varun.79@gmail.com"
					className="text-white hover:text-red-500"
				>
					<Email />
				</IconButton>
			</Box>

			{/* Footer Text */}
			<Typography
				variant="body2"
				style={{ marginLeft: "0%" }}
				className="text-lefft  text-gray-400"
			>
				© {new Date().getFullYear()} Varun Kandula. All Rights Reserved.
			</Typography>
		</Box>
	);
}
