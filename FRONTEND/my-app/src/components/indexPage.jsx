import React, { useState, useEffect } from "react";
import bike1 from "../static/images/background.jpg";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import VehicleTypeButtons from "./vehicleType";
import VehicleGrid from "./vehicelGrid";
import Footer from "./footer";

export default function IndexPage() {
	return (
		<>
			<div className="relative flex justify-center">
				<img src={bike1} className="w-full h-[32rem] " />
				<Paper
					className="  w-[97%] max-w-[97%] min-h-[30rem]  absolute top-[450px]"
					sx={{ bgcolor: "rgba(252,252,254, 0.99)" }}
					elevation={24}
				>
					<div className="font-bold mt-4 mb-4 text-2xl ml-[11%] border-red  ">
						{/* bg-black sm:bg-blue-800 md:bg-red-500 xl:bg-green-500 */}
						<p>POPULAR SEARCHES</p>
					</div>
					<div>
						{/* <RadioButton/> */}
						<VehicleTypeButtons />
						<Divider
							className="pt-4 w-[90%] justify-self-center "
							variant="middle"
						/>
					</div>
					<div>
						<VehicleGrid className="" />
					</div>
				</Paper>
			</div>
		</>
	);
}
