import { Container, Heading } from "@chakra-ui/react";
import { MdBookmark, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container maxWidth={"1024px"}>
      <header>
        <Heading as={Link} to="/">
          Series
        </Heading>
        <nav>
          <ul>
            <li>
              <a className="nav-link" href="">
                <MdFavorite />
                Favoritas
              </a>
            </li>
            |
            <li>
              <a href="">
                <MdBookmark />
                Ver más tarde
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
