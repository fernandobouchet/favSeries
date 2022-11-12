import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};
export default Header;
