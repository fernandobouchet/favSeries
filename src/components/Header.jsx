import { Box, Heading, Badge, Button, Highlight } from "@chakra-ui/react";
import { MdBookmark, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ misSeries }) => {
  const { favoritas, verMasTarde } = misSeries;

  return (
    <Box bg={"rgba(0, 0, 0, 0.10)"} height={{ base: "9rem", sm: "10rem" }}>
      <header>
        <Heading as={Link} to="/" size="2xl" lineHeight="tall">
          <Highlight
            query="TOP"
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
          >
            TOP Series
          </Highlight>
        </Heading>
        <nav>
          <Box display={"flex"} gap="1rem" justifyContent={"center"}>
            <Button
              as={Link}
              to="/favoritas"
              colorScheme="gray"
              variant="outline"
              border={"none"}
              gap={2}
            >
              <MdFavorite />
              Favoritos<Badge>{favoritas.length}</Badge>
            </Button>
            <Button
              as={Link}
              to="/ver-mas-tarde"
              colorScheme="gray"
              variant="outline"
              border={"none"}
              gap={2}
            >
              <MdBookmark />
              Ver más tarde<Badge>{verMasTarde.length}</Badge>
            </Button>
          </Box>
        </nav>
      </header>
    </Box>
  );
};
export default Header;
