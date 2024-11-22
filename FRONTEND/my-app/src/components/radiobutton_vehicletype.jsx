import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";

export default function RadioButton() {
	// radio button handlers
	const [selectedValue, setSelectedValue] = React.useState("a");
	const handleChange = (event) => {
		setSelectedValue(event.target.value);
		alert(`clicked ${event.target.value}`);
	};

	return (
		<div className="flex ml-32">
			<Radio
				checked={selectedValue === "bike"}
				onChange={handleChange}
				value="bike"
				name="radio-buttons"
				inputProps={{ "aria-label": "A" }}
			/>
			<p className="font-bold my-auto text-xl">Bikes</p>
			<Radio
				checked={selectedValue === "car"}
				onChange={handleChange}
				value="car"
				name="radio-buttons"
				inputProps={{ "aria-label": "B" }}
			/>
			<p className="font-bold my-auto text-xl">Cars</p>
		</div>
	);
}
