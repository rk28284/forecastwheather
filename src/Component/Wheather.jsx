import { useState, useEffect } from "react";
import { CitySearch } from "./CitySearch";
import { CityName } from "./CityName";
import { TemperatureDisplay } from "./TemperatureDisplay";
import { WeatherIcon } from "./WeatherIcon";
import { ToggleButton } from "./ToggleButton";
import { WeatherCondition } from "./WeatherCondition";
import { Box, Text, Spinner, Divider } from "@chakra-ui/react";
import { Fivedayforcast } from "./Fivedayforcast";

const API_KEY = `bbd2b55a6c6c0fc7a52d01410e1eab3f`; 

export const Wheather = () => {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState([]); 
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
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
      
        {weatherData.length > 0 && (
  <Box mt={4} p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="gray.50">
 
    <Text 
  fontSize="2xl" 
  fontWeight="semibold" 
  color="blue.600" 
  textAlign="left"
  mb={2} 
  textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)" 
  letterSpacing="wide"
>
Today Wheather
</Text>
    <Divider orientation='horizontal' />
    <CityName city={weatherData[weatherData.length - 1].name} />
    <TemperatureDisplay temp={weatherData[weatherData.length - 1].main.temp} unit={unit} />
    <WeatherCondition condition={weatherData[weatherData.length - 1].weather[0].description} />
    <WeatherIcon icon={weatherData[weatherData.length - 1].weather[0].icon} />
  </Box>
)}
        <ToggleButton unit={unit} setUnit={setUnit} />
      </Box>
      <Box>
        {weatherData.length > 0 && (
          <Fivedayforcast city={weatherData[weatherData.length - 1].name} />
        )}
      </Box> 
     
    </Box>
  );
};
