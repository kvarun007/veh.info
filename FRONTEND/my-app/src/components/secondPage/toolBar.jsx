import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import ImageSlider from "./imageSlider";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [activeItem, setActiveItem] = useState(0);

	// const handleOpenNavMenu = (event) => {
	// 	setAnchorElNav(event.currentTarget);
	// };
	// const handleOpenUserMenu = (event) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	// const handleCloseNavMenu = () => {
	// 	setAnchorElNav(null);
	// };

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	return (
		<>
			<div className="w-[100%] justify-self-center ">
				<Container maxWidth="xl" className="bg-white !important">
					<Toolbar disableGutters>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "flex" },
							}}
						>
							{pages.map((page, index) => (
								<>
									<Button
										key={page}
										// onClick={handleCloseNavMenu}
										sx={{
											mt: 2,
											color: "black",
											display: "block",
											fontSize: "15px",
											mx: 2,
										}}
										onClick={() => setActiveItem(page)}
									>
										<div>{page}</div>
										<div
											className={
												activeItem === page ? "bg-black w-full h-1" : ""
											}
										></div>
									</Button>

									{index < pages.length - 1 ? (
										// <div className="h-10 w-[4px] bg-gray-300 my-auto shadow-custom-lg"></div>
										<div
											className=" border-[0.5px] h-6 border-t-0 border-b-0 border-to-top-gray my-auto "
											style={{
												borderImage:
													"linear-gradient(to top, #e2e2e2, #c2c2c2, #e2e2e2)",
												borderImageSlice: 1,
											}}
										></div>
									) : (
										<div></div>
									)}
								</>
							))}
						</Box>
					</Toolbar>
					<Divider
						className="  w-[100%] justify-self-center "
						variant="middle"
					/>
				</Container>
			</div>
		</>
	);
}
export default ResponsiveAppBar;
