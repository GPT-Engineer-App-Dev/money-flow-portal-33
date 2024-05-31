import { Container, Text, VStack, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" p={4}>
          <VStack spacing={4} align="start">
            <Text fontSize="3xl" fontWeight="bold">Latest News</Text>
            <Box>
              <Text fontSize="xl" fontWeight="bold">Article 1</Text>
              <Text>Summary of the first article...</Text>
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">Article 2</Text>
              <Text>Summary of the second article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.100" borderRadius="md">
          <VStack spacing={4} align="start">
            <Text fontSize="2xl" fontWeight="bold">Market Data</Text>
            <Text>Market data will be displayed here...</Text>
            <Text fontSize="2xl" fontWeight="bold">Trending Topics</Text>
            <Text>Trending topics will be displayed here...</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;