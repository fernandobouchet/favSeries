import { Box, Heading } from "@chakra-ui/react";
import { MdBookmark, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ misSeries }) => {
  const { favoritas, verMasTarde } = misSeries;

  return (
    <Box bg={"rgba(0, 0, 0, 0.10)"}>
      <header>
        <Heading as={Link} to="/">
          TOP Series
        </Heading>
        <nav>
          <ul>
            <li>
              <Link to="/favoritas">
                <MdFavorite />
                Favoritos - {favoritas.length}
              </Link>
            </li>
            |
            <li>
              <Link to="/ver-mas-tarde">
                <MdBookmark />
                Ver más tarde - {verMasTarde.length}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Box>
  );
};
export default Header;
