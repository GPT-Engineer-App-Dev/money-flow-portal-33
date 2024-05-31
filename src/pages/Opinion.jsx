import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Opinion = () => (
  <Box p={4} bg="#fff1e5">
    <Text fontSize="2xl">Opinion Page</Text>
    <Text>Opinion articles and editorials will be displayed here.</Text>
    <Link as={RouterLink} to="/">Back to Home</Link>
  </Box>
);

export default Opinion;