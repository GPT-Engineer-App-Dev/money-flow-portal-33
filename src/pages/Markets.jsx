import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Markets = () => (
  <Box p={4}>
    <Text fontSize="2xl">Markets Page</Text>
    <Text>Market data and financial information will be displayed here.</Text>
    <Link as={RouterLink} to="/">Back to Home</Link>
  </Box>
);

export default Markets;