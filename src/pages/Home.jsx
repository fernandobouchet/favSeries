import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import SerieCard from "../components/SerieCard";

const Home = ({ data }) => {
  return (
    <Container maxWidth={"1024px"}>
      <h1>Series</h1>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="10px">
        {data &&
          data.map((serie) => (
            <Box maxW="14rem" p={"0.5rem"} key={serie.id}>
              <SerieCard data={serie} />
            </Box>
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
