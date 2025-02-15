import { configureStore } from "@reduxjs/toolkit";

// funtion to get the user detail for local store
const loadUserFromStorage = () => {
	try {
		const userData = localStorage.getItem("User");
		return userData ? JSON.parse(userData) : null;
	} catch (error) {
		console.error("Error loading user from localStorage:", error);
		return null;
	}
};

const initialState = {
	vehicleType: "all",
	loginPage: "closed",
	user: loadUserFromStorage(),
	// user: null,
};

// Reducer function
const vehicleTypeReducer = (state = initialState, action) => {
	if (action.type == "SET_USER") {
		console.log({ ...state, user: action.payload });
		return { ...state, user: action.payload };
	}
	switch (action.type) {
		case "bike":
			return { ...state, vehicleType: "bike" };
		case "car":
			return { ...state, vehicleType: "car" };
		case "all":
			return { ...state, vehicleType: "all" };
		case "opened":
			return { ...state, loginPage: "opened" };
		case "closed":
			return { ...state, loginPage: "closed" };

		default:
			return state;
	}
};

// Create store
const store = configureStore({
	reducer: vehicleTypeReducer,
});

export default store;
