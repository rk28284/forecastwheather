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
      size="sm" 
    colorScheme="blue"
          variant="solid"
  
     
      _hover={{ bg: 'teal.500', color: 'white' }} 
    >
      Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </Button>
  );
};