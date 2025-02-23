import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ClassNames } from "@emotion/react";
import { useDebounce } from "use-debounce";
import { useState, useEffect, useRef } from "react";
// import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Footer from "./footer";
import AddMileage from "./addMileage";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {
	Menu,
	MenuItem,
	IconButton,
	Box,
	Typography,
	Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderBottom: "2px solid ",
	// backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		// backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "40%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		[theme.breakpoints.up("sm")]: {
			width: "30ch", //change to 12ch
			"&:focus": {
				width: "30ch",
			},
		},
	},
}));

const SuggestionsList = styled("div")({
	position: "absolute",
	top: "100%",
	left: 0,
	width: "100%",
	backgroundColor: "#3B8AD9",
	borderRadius: "4px",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	zIndex: 10,
	maxHeight: "200px",
	overflowY: "auto",
	marginTop: "8px",
});

const SuggestionItem = styled("div")({
	padding: "8px 12px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#1976D2",
	},
});

// This function returns the NAVBAR
export default function Navbar() {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

	useEffect(() => {
		document.addEventListener(
			"click",
			handleClickOutsideOfSuggestionList,
			true
		);
	}, []);

	const refSuggestionList = useRef(null);
	const handleClickOutsideOfSuggestionList = (e) => {
		if (!refSuggestionList.current.contains(e.target)) {
			setSearchQuery("");
		}
	};

	useEffect(() => {
		if (debouncedSearchQuery.length > 0) {
			fetchSuggestions(debouncedSearchQuery);
		} else {
			setSuggestions([]); // Clearing suggestions when input is empty
		}
	}, [debouncedSearchQuery]);

	const fetchSuggestions = async (query) => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/api/vehicles/search/?q=${query}`
			);
			const data = await response.json();
			setSuggestions(data); //  API returns an array of suggestions
		} catch (error) {
			console.error("Error fetching suggestions:", error);
			setSuggestions([]);
		}
	};
	// This function Updates the text in the Search component of the navbar
	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	// This function takes the suggestion click by the user from the sugggestion list and set it as searchQuery state and it set the suggestion to empty array
	const handleSuggestionClick = (suggestion) => {
		setSearchQuery(
			suggestion.model.includes(suggestion.make)
				? suggestion.model
				: suggestion.make + " " + suggestion.model
		);
		setSuggestions([]);
		setSearchQuery("");
	};

	//handle Profile click
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// const dispatch = useDispatch();

	// Modal state for adding mileage
	// const [openMileageModal, setOpenMileageModal] = useState(false);

	const handleMileageSubmit = async () => {
		// try {
		// 	const response = await fetch("http://127.0.0.1:8000/api/vehicles/add-mileage/", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({ mileage: mileageInput }),
		// 	});
		// 	if (response.ok) {
		// 		alert("Mileage added successfully!");
		// 		setOpenMileageModal(false);
		// 	} else {
		// 		alert("Failed to add mileage.");
		// 	}
		// } catch (error) {
		// 	console.error("Error adding mileage:", error);
		// 	alert("An error occurred.");
		// }
		console.log("mil");
	};

	//sticky navbar
	// State to track whether the AppBar should have elevated styles
	const [elevate, setElevate] = useState(false);

	// Function to handle the scroll event
	const handleScroll = () => {
		const offset = window.scrollY; // Get the current scroll position
		console.log();
		setElevate(offset > 50); // Set elevate to true if scroll is greater than 50px
	};

	// Set up the scroll listener when the component mounts
	useEffect(() => {
		window.addEventListener("scroll", handleScroll); // Add the event listener
		return () => window.removeEventListener("scroll", handleScroll); // Clean up
	}, []);

	// login user
	const [anchorEl, setAnchorEl] = useState(null); // State to control dropdown

	const openUserMenuOptions = Boolean(anchorEl); // Check if menu is open
	//redux state to details
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const setUser = (data) =>
		dispatch({
			type: "SET_USER",
			payload: data,
		});

	// Function to open dropdown
	const openUserMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	// Function to close dropdown
	const closeUserMenu = () => {
		setAnchorEl(null);
	};

	const handleSuccess = (response) => {
		const decodedUser = jwtDecode(response.credential); // Decode JWT token
		console.log(decodedUser);
		localStorage.setItem("User", JSON.stringify(decodedUser));
		// user = JSON.parse(localStorage.getItem("User"));
		// console.log(user);
		setUser(decodedUser); // Store user details
		handleClose(); // Close menu after login
	};

	// Handle Google Login Failure
	const handleFailure = () => {
		alert("Login failed!");
	};

	return (
		<div>
			<Box sx={{ flexGrow: 1 }} className="">
				<AppBar
					// position={elevate ? "sticky" : null}

					sx={{
						backgroundColor: elevate ? "white " : "transparent", // Set the navbar background color to white
						color: elevate ? "black" : "white ", // Set the text and icon color to black
						boxShadow: elevate ? null : "none",
					}}
				>
					<Toolbar className="">
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: {} }}
						>
							VEHICE.INFO
						</Typography>

						<Search ref={refSuggestionList}>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								value={searchQuery}
								onChange={handleSearchChange}
								placeholder="Search…"
								inputProps={{
									"aria-label": "search",
									style: {
										fontStyle: "italic", // Apply italic style here
									},
								}}
							/>
							{suggestions.length > 0 && (
								<SuggestionsList
									sx={{
										backgroundColor: elevate
											? "white "
											: "rgba(40, 40, 40, 0.7)",
									}}
								>
									{suggestions.map((suggestion) => (
										<SuggestionItem
											sx={{
												":hover": {
													backgroundColor: elevate
														? "rgba(0, 0, 0, 0.2)"
														: "rgba(255, 255, 255, 0.3)",
												},
											}}
											key={suggestion.model}
											onClick={() => handleSuggestionClick(suggestion)}
										>
											<Link to={`/vehicles/${suggestion.model}`}>
												{suggestion.model.includes(suggestion.make)
													? suggestion.model
													: suggestion.make + " " + suggestion.model}
											</Link>
										</SuggestionItem>
									))}
								</SuggestionsList>
							)}
						</Search>

						{/* <IconButton
							variant="contained"
							color="inherit"
							onClick={() => setOpenMileageModal(true)}
							sx={{
								color: "inherit",
								marginLeft: "16px",
								display: "flex",
								alignItems: "center",
								gap: "8px",
								borderRadius: 0,
								border: "none",
								outline: "none",
								backgroundColor: "transparent",
								":hover": {
									backgroundColor: "transparent",
									border: "none",
								},
								":focus": {
									border: "none",
									outline: "none",
									backgroundColor: "transparent",
								},
							}}
						>
							<LocalGasStationIcon />
							<Typography
								variant="button"
								sx={{
									fontWeight: 500,
								}}
							>
								Add Mileage
							</Typography>
						</IconButton> */}
						<IconButton size="large" color="inherit">
							<AccountCircle sx={{ fontSize: 40 }} onClick={openUserMenu} />
						</IconButton>

						{/* Dropdown Menu */}

						<Menu
							anchorEl={anchorEl}
							open={openUserMenuOptions}
							onClose={closeUserMenu}
						>
							{!user ? (
								<MenuItem>
									<GoogleLogin
										onSuccess={handleSuccess}
										onError={handleFailure}
									/>
								</MenuItem>
							) : (
								<>
									<Link to={"/Mygarage"}>
										<MenuItem
											sx={{
												"&:hover": { bgcolor: "#252B2D", color: "white" },
											}}
											onClick={() => {
												closeUserMenu();
											}}
										>
											🚗 Your Garage
										</MenuItem>
									</Link>
									<Divider />
									<Box sx={{ p: 1, textAlign: "center" }}>
										<Typography variant="subtitle1" fontWeight="bold">
											{user.name}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{user.email}
										</Typography>
										<GoogleLogin
											onSuccess={handleSuccess}
											onError={handleFailure}
										/>
									</Box>
								</>
							)}
						</Menu>
					</Toolbar>
				</AppBar>

				{/* mileage submit modal
				<Modal
					open={openMileageModal}
					onClose={() => setOpenMileageModal(false)}
					aria-labelledby="add-mileage-title"
					aria-describedby="add-mileage-description"
				>
					<AddMileage />
				</Modal> */}
			</Box>
		</div>
	);
}
