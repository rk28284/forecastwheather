import React from "react";
import { Text } from "@chakra-ui/react";

export const WeatherCondition = ({ condition }) => {
  return (
    <Text fontSize="lg" fontWeight="semibold" color="black">
      Condition: {condition}
    </Text>
  );
};
