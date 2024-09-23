import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const TemperatureDisplay = ({ temp, unit }) => {
  const convertTemp = (temp, unit) => {
    if (unit === "F") {
      return (temp * 9) / 5 + 32;
    }
    return temp;
  };

  return (
    <Box className="temperature-display">
      <Text fontSize="2xl" fontWeight="bold" color="black">
        Temperture:{convertTemp(temp, unit).toFixed(1)}°{unit}
      </Text>
    </Box>
  );
};
