import React from "react";
import { Heading, Box } from "@chakra-ui/react";

export const CityName = ({ city }) => {
  console.log(city,"Line 5");
  
  return (
    <Box mt={4}>
      <Heading as="h2" size="xl" color="blue.600">
       City Name:- {city}
      </Heading>
    </Box>
  );
};
 