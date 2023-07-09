import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.200", "gray.700")} py={4} zIndex={99}>
      <Container maxW={"container.lg"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <Text>
            © {new Date().getFullYear()} Shaxzod Eduction. All rights reserved
          </Text>
          <HStack>
            <Button variant={"outline"}>
              <BsYoutube />
            </Button>
            <Button variant={"outline"}>
              <BsTelegram />
            </Button>
            <Button variant={"outline"}>
              <BsTwitter />
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
