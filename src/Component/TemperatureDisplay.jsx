// import React from 'react'
// import "../App.css"

// export const TemperatureDisplay = ({temp,unit}) => {
//     const convertTemp = (temp, unit) => {
//         if (unit === 'F') {
//           return (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
//         }
//         return temp; // Default is Celsius
//       };
//   return (
//     <div className="temperature-display">
//       <p>{convertTemp(temp, unit).toFixed(1)}°{unit}</p>
//     </div>
//   )
// }

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const TemperatureDisplay = ({ temp, unit }) => {
  const convertTemp = (temp, unit) => {
    if (unit === 'F') {
      return (temp * 9) / 5 + 32; 
    }
    return temp; 
  };

  return (
    <Box 
      className="temperature-display" 
      mt={4} 
      p={4} 
      border="1px solid" 
      borderColor="gray.200" 
      borderRadius="lg" 
      bg="gray.50"
    >
      <Text fontSize="3xl" fontWeight="bold" color="blue.600">
        {convertTemp(temp, unit).toFixed(1)}°{unit}
      </Text>
    </Box>
  );
};
