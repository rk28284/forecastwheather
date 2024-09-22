import { Fivedayforcast } from "./Component/Fivedayforcast";
import { Wheather } from "./Component/Wheather";
import { Box } from "@chakra-ui/react";
import img from "./Utilities/wheather.jpg"

function App() {
  return (
    <Box
      className="App"
      minH="100vh"
      bgImage={img}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      p={5}
    >
      <Wheather />
      <Fivedayforcast />
    </Box>
  );
}

export default App;
