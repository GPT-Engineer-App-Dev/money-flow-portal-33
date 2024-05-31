import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#fff1e5" p={4} mt={8}>
      <Flex justify="space-between" wrap="wrap">
        <Box>
          <Text fontWeight="bold">Financial Times</Text>
          <Text>© 2023 Financial Times</Text>
        </Box>
        <Flex>
          <Link as={RouterLink} to="/" mr={4}>Home</Link>
          <Link as={RouterLink} to="/markets" mr={4}>Markets</Link>
          <Link as={RouterLink} to="/world" mr={4}>World</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </Flex>
        <Box>
          <Text>Contact Us</Text>
          <Text>Email: contact@financialtimes.com</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;