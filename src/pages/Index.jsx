import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW="container.md" p={4} bg={bgColor} color={textColor} minH="100vh">
      <Box display="flex" justifyContent="flex-end">
        <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Box>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331947-9460dd2f264b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTYxMjk5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | Tech Enthusiast | Lifelong Learner
        </Text>
        <HStack spacing={4}>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
        </HStack>
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text mt={4}>Hi, I'm John Doe, a passionate full stack developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks. When I'm not coding, you can find me reading tech blogs or hiking in the mountains.</Text>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <Text mt={4}>
            <Link href="https://github.com/johndoe/project1" isExternal color="teal.500">
              Project 1
            </Link>
            : A web application built with React and Node.js.
          </Text>
          <Text mt={2}>
            <Link href="https://github.com/johndoe/project2" isExternal color="teal.500">
              Project 2
            </Link>
            : A mobile app developed using React Native and Expo.
          </Text>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Contact
          </Heading>
          <Text mt={4}>
            Feel free to reach out to me via{" "}
            <Link href="mailto:johndoe@example.com" color="teal.500">
              email
            </Link>
            .
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
