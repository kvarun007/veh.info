import React, { useState, useEffect } from "react";

import bike1 from "../../static/images/background.jpg";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import VehicleTypeButtons from "./vehicleType";
import VehicleGrid from "./vehicelGrid";

export default function IndexPage() {
	return (
		<>
			<div className="flex flex-col justify-center">
				<div className="relative h-[32rem] overflow-hidden">
					<img src={bike1} className="w-full h-[32rem] " />
					{/* gradient */}
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
					<div className="absolute inset-0 flex items-end justify-center pb-16">
						<h1 className="text-4xl font-bold text-white text-center">
							Explore Your Next Vehicle
						</h1>
					</div>
				</div>
				<Paper
					className="  w-[100%] min-h-[30rem]    top-[450px] z-40"
					sx={{
						bgcolor: "rgb(245,247,251)", //"rgba(252,252,254, 0.99)"
						margin: "auto",
						marginTop: "-8vh",
					}}
					elevation={24}
				>
					<div className=" popular search bg-white   w-[100%] justify-self-center py-4 ">
						<div className="font-bold mb-2 text-xl ml-[8%]  ">
							{/* bg-black sm:bg-blue-800 md:bg-red-500 xl:bg-green-500 */}
							<p className="text-3xl font-bold text-gray-800">
								POPULAR SEARCHES
							</p>
						</div>
						<div>
							{/* <RadioButton/> */}
							<VehicleTypeButtons />
							{/* <Divider
								className="pt-4 w-[90%] justify-self-center "
								variant="middle"
							/> */}
						</div>
					</div>

					<div className="">
						<VehicleGrid className="" />
					</div>
				</Paper>
			</div>
		</>
	);
}
