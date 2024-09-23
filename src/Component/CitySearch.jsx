import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";

export const CitySearch = ({ setCity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setError("Please enter a city name.");
    } else {
      setCity(searchTerm);
      setSearchTerm("");
      setError(null);
    }
  };

  return (
    <Box  p={2} borderRadius="lg" bg="gray.100">
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Enter Your City Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={3}
          borderRadius="lg"
          color='black'
          border="2px solid"
          borderColor="blue.300"
          _placeholder={{ color: 'black' }}
        />
        <Button
          type="submit"
          colorScheme="blue"
          variant="solid"
          borderRadius="lg"
          w="full"
        >
          Search
        </Button>
      </form>
      {error && (
        <Text color="red.500" mt={2}>
          {error}
        </Text>
      )}
    </Box>
  );
};