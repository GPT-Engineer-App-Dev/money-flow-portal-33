import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="#fff1e5" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold" fontSize="xl">Financial Times</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/markets">Markets</Link>
            <Link as={RouterLink} to="/world">World</Link>
            <Link as={RouterLink} to="/opinion">Opinion</Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;