// VehicleTypeContext.js

import React, { createContext, useState, useContext } from "react";

// Create the context
const VehicleTypeContext = createContext();

// Create the provider component with default export
const VehicleTypeProvider = ({ children }) => {
	const [vehicleType, setVehicleType] = useState("all");

	return (
		<VehicleTypeContext.Provider value={{ vehicleType, setVehicleType }}>
			{children}
		</VehicleTypeContext.Provider>
	);
};
// tester 222
// Custom hook to use vehicleType context
const useVehicleType = () => {
	const context = useContext(VehicleTypeContext);
	if (!context) {
		throw new Error("useVehicleType must be used within a VehicleTypeProvider");
	}
	return context;
};

// Default exports
export default VehicleTypeProvider;
export { useVehicleType };
