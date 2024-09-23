import React from "react";
import { Text, Box } from "@chakra-ui/react";

export const CityName = ({ city }) => {
  console.log(city,"Line 5");
  
  return (
    <Box mt={4}>
     
      <Text fontSize="2xl" fontWeight="bold" color="black">
      Location: {city}
      </Text>
    </Box>
  );
};
 