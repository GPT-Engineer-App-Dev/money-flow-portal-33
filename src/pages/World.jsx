import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const World = () => (
  <Box p={4}>
    <Text fontSize="2xl">World Page</Text>
    <Text>Global news and updates will be displayed here.</Text>
    <Link as={RouterLink} to="/">Back to Home</Link>
  </Box>
);

export default World;