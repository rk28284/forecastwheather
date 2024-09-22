// import { useState, useEffect } from "react";
// import { CitySearch } from "./CitySearch";
// import { CityName } from "./CityName";
// import { TemperatureDisplay } from "./TemperatureDisplay";
// import { WeatherIcon } from "./WeatherIcon";
// import { ToggleButton } from "./ToggleButton";
// import { ForecastCard } from "./ForecastCard";
// import { WeatherCondition } from "./WeatherCondition";
// import { Box, Flex, Grid, Text, Spinner, } from "@chakra-ui/react";
// import { Divider } from '@chakra-ui/react'
// const API_KEY = `bbd2b55a6c6c0fc7a52d01410e1eab3f`; // Use environment variable

// export const Wheather = () => {
//   const [city, setCity] = useState("New York");
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [unit, setUnit] = useState("C"); // Celsius by default
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchWeatherData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();
//       setWeatherData(data);
//       setLoading(false);
//     } catch (error) {
//       setError("Something went wrong while fetching weather data");
//       setLoading(false);
//     }
//   };
// //console.log(weatherData,"Line No 35");
// console.log(setCity,"Line Number 36 setcity")
//   useEffect(() => {
//     fetchWeatherData();
//   }, [city, unit]);

//   return (
//    <Box>
//      <Box 
//     w={["90%", "80%", "40%"]}  /* Responsive width: 90% on small screens, 80% on medium, 60% on large */
//     p={8} 
//     shadow="md" 
//     borderWidth="1px" 
//     borderRadius="lg" 
//     bg="white" 
//     mb={0} 
//     mx="auto"  /* Center the box horizontally */
//   >
//     <CitySearch setCity={setCity} />
//     {loading && <Spinner />}
//     {error && <Text color="red.500">{error}</Text>}
   
//   </Box>
// <Box 
//   w={["90%", "80%", "40%"]}  /* Responsive width: 90% on small screens, 80% on medium, 60% on large */
//   p={8} 
//   mt={4}
//   shadow="md" 
//   borderWidth="1px" 
//   borderRadius="lg" 
//   bg="white" 
//   mb={0} 
//   mx="auto"  /* Center the box horizontally */>
//      {weatherData && (
//       <>
//       <Text fontSize="lg" color="gray.600">Today Wheather</Text>
//       <Divider orientation='horizontal' />
//    <Box
//    mt={4} 
// p={4} 
// border="1px solid" 
// borderColor="gray.200" 
// borderRadius="lg" 
// bg="gray.50">
//    <CityName name={weatherData.name} />
//         <TemperatureDisplay temp={weatherData.main.temp} unit={unit} />
//         <WeatherCondition condition={weatherData.weather[0].description} />
//         <WeatherIcon icon={weatherData.weather[0].icon} />
       
//    </Box>
//    <ToggleButton unit={unit} setUnit={setUnit} />
//       </>
//     )}
// </Box>
//    </Box>

  
//   );
// };


import { useState, useEffect } from "react";
import { CitySearch } from "./CitySearch";
import { CityName } from "./CityName";
import { TemperatureDisplay } from "./TemperatureDisplay";
import { WeatherIcon } from "./WeatherIcon";
import { ToggleButton } from "./ToggleButton";
import { WeatherCondition } from "./WeatherCondition";
import { Box, Text, Spinner, Divider } from "@chakra-ui/react";

const API_KEY = `bbd2b55a6c6c0fc7a52d01410e1eab3f`; // Use environment variable

export const Wheather = () => {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState([]); // Changed to array
  const [unit, setUnit] = useState("C"); // Celsius by default
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      // Add new weather data to the array
      setWeatherData(prevData => [...prevData, data]);
    } catch (error) {
      setError("Something went wrong while fetching weather data");
    } finally {
      setLoading(false);
    }
  };
console.log(weatherData);

  useEffect(() => {
    fetchWeatherData();
  }, [city, unit]);

  return (
    <Box>
      <Box 
        w={["90%", "80%", "40%"]}
        p={8}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        mb={0}
        mx="auto">
        
        <CitySearch setCity={setCity} />
        {loading && <Spinner />}
        {error && <Text color="red.500">{error}</Text>}
      </Box>

      <Box 
        w={["90%", "80%", "40%"]}
        p={8}
        mt={4}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        mb={0}
        mx="auto">
        
        {weatherData.length > 0 && weatherData.map((data, index) => (
          <Box key={index} mt={4} p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="gray.50">
            <Text fontSize="lg" color="gray.600">Weather for {data.name}</Text>
            <Divider orientation='horizontal' />
            <CityName name={data.name[0]} />
            <TemperatureDisplay temp={data.main.temp} unit={unit} />
            <WeatherCondition condition={data.weather[0].description} />
            <WeatherIcon icon={data.weather[0].icon} />
          </Box>
        ))}
        
        <ToggleButton unit={unit} setUnit={setUnit} />
      </Box>
    </Box>
  );
};

