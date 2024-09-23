import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner, Divider } from "@chakra-ui/react";
import { WeatherIcon } from './WeatherIcon';
const API_KEY = 'bbd2b55a6c6c0fc7a52d01410e1eab3f';
export const Fivedayforcast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecastData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "200") {

        const filteredData = data.list.filter((_, index) => index % 8 === 0);
        setForecastData(filteredData);
      } else {
        setError('Failed to fetch forecast data');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, [city]);

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', { weekday: 'long' });
  };
  return (
    <Box mt={4} w={["90%", "80%", "70%"]} p={8} shadow="md" borderWidth="1px" borderRadius="lg" bg="white" mx="auto">
      <Text 
  fontSize="2xl" 
  fontWeight="semibold"
  color="blue.600" 
  textAlign="left" 
  mb={6}
  textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)" 
  letterSpacing="wide" 
>
  5-Day Forecast
</Text>

      <Divider orientation='horizontal' mb={4} />

      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}

      <Box display="flex" justifyContent="space-between" gap={4} flexWrap="wrap">
  {forecastData.map((day, index) => (
    <Box 
      key={index} 
      p={4} 
      borderRadius="lg" 
      bgGradient="linear(to-r, blue.300, cyan.200)" 
      boxShadow="lg" 
      
      textAlign="center"
      transition="transform 0.2s" 
      _hover={{ transform: "scale(1.05)" }}
    >
      <Text fontSize="lg" fontWeight="bold" color="white">{getDayOfWeek(day.dt)}</Text>  
      <WeatherIcon icon={day.weather[0].icon} />
      <Text fontSize="md" color="white" mt={2}>High: <Text as="span" fontWeight="bold" color="yellow.300">{day.main.temp_max.toFixed(1)}°C</Text></Text>
      <Text fontSize="md" color="white">Low: <Text as="span" fontWeight="bold" color="cyan.100">{day.main.temp_min.toFixed(1)}°C</Text></Text>
    </Box>
  ))}
</Box>

    </Box>
  );
}
