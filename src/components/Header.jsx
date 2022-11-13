import { Container, Heading } from "@chakra-ui/react";
import { MdBookmark, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ misSeries }) => {
  const { favoritas, verMasTarde } = misSeries;

  return (
    <Container maxWidth={"1024px"}>
      <header>
        <Heading as={Link} to="/">
          Series
        </Heading>
        <nav>
          <ul>
            <li>
              <Link to="/favoritas">
                <MdFavorite />
                Favoritas - {favoritas.length}
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
    </Container>
  );
};
export default Header;
