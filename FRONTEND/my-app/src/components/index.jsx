import React, { useState, useEffect } from "react";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]); // Fixed the order of state variables
    const [fetchData, setFetchData] = useState(false);

    const fetchApiData = async () => {
        try {
            console.log(searchValue);
            const response = await fetch(`http://127.0.0.1:8000/bike/${searchValue}/`);
            const result = await response.json();
            setData(result);
            console.log("Fetched data:", result);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]) // no data found 
        }
    };

    useEffect(() => {
        if (fetchData) {
            fetchApiData();
            setFetchData(false);
        }
    }, [fetchData]);

    return (
        <>
            
            <div className="bg-[#FFCF9D] h-screen ">
                
                <div className="flex justify-center ">
                    <div > 
                        <input
                            className="bg-slate-400 "
                            placeholder="Search for the bike"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <button
                            className="bg-slate-400 w-32 h-6 ml-6  text-black font-bold"
                            onClick={() => setFetchData(true)}
                        >
                            SEARCH
                        </button>
                    </div>
                    
                </div>
                {/* <div className="flex justify-center mt-4">
                    <p>You typed: {searchValue}</p>
                </div>
                <div className="flex justify-center mt-4">
                    <p>Result:</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre> 
                </div> */}
            
                {data.bikeImage ? (
                    <div className="flex justify-center">
                        <img src={`http://127.0.0.1:8000/${data.bikeImage}`} alt="Bike" className="mt-4 w-[32rem] border border-indigo-600 rounded-" />
                    </div>
                ) : null}

                {data.length !==0 ?(
                    <div>
                        <div>
                            MODEL:{data.bikeName}
                        </div>
                        <div>
                            TYRE PRESSURE DETAILS
                            <div>
                                FRONT WHEEL : {data.frontTyrePressure}
                                <br/>
                                REAR WHEEL : {data.backTyrePressure}
                            </div>
                        </div>
                        <div>
                            WHEEL SIZE DETAILS
                            <div>
                                FRONT WHEEL:{data.frontTyreSize}
                                <br/>
                                REAR WHEEL:{data.backTyreSize}
                            </div>
                        </div>
                    </div>
                ) : null}
                
            </div>
        </>
        
    );
}
