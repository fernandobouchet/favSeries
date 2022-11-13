import { Container, Heading } from "@chakra-ui/react";
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
              <a href="">Favoritas</a>
            </li>
            <li>
              <a href="">Ver más tarde</a>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
