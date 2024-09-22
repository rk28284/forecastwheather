import React from 'react';
import { Button } from '@chakra-ui/react';

export const ToggleButton = ({ unit, setUnit }) => {
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <Button 
    mt={2}
      onClick={toggleUnit}
      size="sm" // Adjust size as needed
    colorScheme="blue"
          variant="solid"
     // Choose a color scheme 
     
      _hover={{ bg: 'teal.500', color: 'white' }} // Hover effect
    >
      Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </Button>
  );
};