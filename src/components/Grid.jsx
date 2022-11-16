import { SimpleGrid, Box, Center } from "@chakra-ui/react";
import SerieCard from "../components/SerieCard";

const Grid = ({ data }) => {
  return (
    <Box>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="10px" p={"1rem 0"}>
        {data.map((serie) => (
          <Box maxW="13rem" p={"0.5rem"} key={serie.id}>
            <SerieCard data={serie} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Grid;
