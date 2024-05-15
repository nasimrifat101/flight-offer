// Import necessary components from React and custom components
import { useEffect, useState } from "react";
import { ExtraOptions, FlightTable, InputGroup, Navbar, SwitchBtn } from "../Components";



const Landing = () => {
    // Define state variables using useState hook
    const [flightData, setFlightData] = useState([]); // Stores flight data fetched from API
    const [showTable, setShowTable] = useState(false); // Controls the visibility of the flight table
    const [activeButton, setActiveButton] = useState('One Way'); // Tracks the active button state

    // Function to handle search click event
    const handleSearchClick = () => {
        setShowTable(true); // Set showTable state to true to display the flight table
    };

    // Function to handle button click event
    const handleButtonClick = (switchBtn) => {
        setActiveButton(switchBtn); // Set the active button state based on the button clicked
    };

    // Fetch flight data from API when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/LHR_CDG_ADT1_TYPE_1.txt'); // Fetch flight data from API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Throw an error if response is not ok
                }
                const textData = await response.text(); // Convert response to text
                const jsonData = JSON.parse(textData); // Parse text data to JSON format
                setFlightData(jsonData); // Update flightData state with fetched data
            } catch (error) {
                console.error('Error fetching the flight data:', error); // Log error if fetch operation fails
            }
        };
        fetchData(); // Call fetchData function when component mounts
    }, []); // Empty dependency array ensures useEffect runs only once when component mounts

    // Render JSX
    return (
        <>
            <Navbar /> {/* Render Navbar component */}
            <div className="max-w-screen-2xl mx-auto min-h-screen">
                <div className=" bg-white  rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 text-center">Master Price</h1> 
                    <hr className="mb-4 border-blue-500 border-opacity-25" /> {/* Render horizontal rule */}
                    <SwitchBtn handleButtonClick={handleButtonClick} activeButton={activeButton} /> {/* Render SwitchBtn component */}
                    <hr className="mb-4 border-blue-500 border-opacity-40" /> 
                    <InputGroup /> {/* Render InputGroup component */}
                    <hr className="mb-4 border-blue-500 border-opacity-55" /> 
                    <ExtraOptions handleSearchClick={handleSearchClick} /> {/* Render ExtraOptions component */}
                    <hr className="mb-4 border-blue-500 border-opacity-75" /> 
                    {showTable && <FlightTable data={flightData?.flightOffer} />} {/* Render FlightTable component conditionally based on showTable state */}
                </div>
            </div>
        </>
    );
};

export default Landing; 
