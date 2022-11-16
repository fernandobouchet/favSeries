import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import SerieCard from "../components/SerieCard";
import ReactPaginate from "react-paginate";

const Home = ({ data, setPage }) => {
  const handlePageChange = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <Container maxWidth={"1024px"} minHeight={"100vh"}>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="10px" p={"1rem 0"}>
        {data &&
          data.results.map((serie) => (
            <Box maxW="13rem" p={"0.5rem"} key={serie.id}>
              <SerieCard data={serie} />
            </Box>
          ))}
      </SimpleGrid>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        h={"3rem"}
        fontSize={"larger"}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => handlePageChange(e)}
          pageCount={data ? data.total_pages - 1 : 0}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </Box>
    </Container>
  );
};

export default Home;
