import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	vehicleType: "all",
	loginPage: "closed",
};

// Reducer function
const vehicleTypeReducer = (state = initialState, action) => {
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
