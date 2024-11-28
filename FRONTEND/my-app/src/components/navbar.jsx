import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ClassNames } from "@emotion/react";
import { useDebounce } from "use-debounce";
import { useState, useEffect, useRef } from "react";
// import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
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

export default function SearchAppBar() {
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
			// console.log("clicked outside");
			setSearchQuery("");
		}
	};

	useEffect(() => {
		if (debouncedSearchQuery.length > 0) {
			fetchSuggestions(debouncedSearchQuery);
		} else {
			setSuggestions([]); // Clear suggestions when input is empty
		}
	}, [debouncedSearchQuery]);

	const fetchSuggestions = async (query) => {
		try {
			const response = await fetch(
				`http://127.0.0.1:8000/api/vehicles/search/?q=${query}`
			);
			const data = await response.json();
			setSuggestions(data); // Assuming the API returns an array of suggestions
			console.log(suggestions);
		} catch (error) {
			console.error("Error fetching suggestions:", error);
			setSuggestions([]);
		}
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
		// console.log(searchQuery);
	};

	// Handle suggestion click
	const handleSuggestionClick = (suggestion) => {
		setSearchQuery(suggestion.vehicleName);
		setSuggestions([]);
		alert(`get the ${suggestion.vehicleName} details`); // need to redirct
	};

	//handle Profile click

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useDispatch();

	return (
		<Box sx={{ flexGrow: 1 }} className="">
			<AppBar>
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
							inputProps={{ "aria-label": "search" }}
						/>
						{suggestions.length > 0 && (
							<SuggestionsList>
								{suggestions.map((suggestion) => (
									<SuggestionItem
										key={suggestion.id}
										onClick={() => handleSuggestionClick(suggestion)}
									>
										{suggestion.vehicleName}
									</SuggestionItem>
								))}
							</SuggestionsList>
						)}
					</Search>
					<IconButton size="large" color="inherit">
						<AccountCircle
							sx={{ fontSize: 40 }}
							onClick={() => {
								dispatch({ type: "opened" });
							}}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</Box>
	);
}
