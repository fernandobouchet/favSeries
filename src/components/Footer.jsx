import { Box, Container, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg={"rgba(0, 0, 0, 0.10)"} mt="2rem">
      <Container
        maxWidth={"1024px"}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        gap="1rem"
        py={2}
      >
        <Text>© 2022 Fernando Bouchet</Text>
        <Link
          href="https://github.com/fernandobouchet"
          target={"_blank"}
          _hover={{ transition: "transform .2s", transform: "scale(1.4)" }}
        >
          <FaGithub />
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
