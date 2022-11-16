import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import SerieCard from "../components/SerieCard";

const VerMasTarde = ({ data }) => {
  return (
    <Container maxWidth={"1024px"} minHeight={"100vh"}>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="10px">
        {data.length > 0 &&
          data.map((serie) => (
            <Box maxW="13rem" p={"0.5rem"} key={serie.id}>
              <SerieCard data={serie} />
            </Box>
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default VerMasTarde;
