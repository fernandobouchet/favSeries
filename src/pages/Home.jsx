import { Box, Container } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import Grid from "../components/Grid";
import { useEffect } from "react";

const Home = ({ data, setPage }) => {
  const handlePageChange = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <Container maxWidth={"1024px"} minHeight={"100vh"}>
      {data && <Grid data={data.results} />}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        h={"3rem"}
        fontSize={{ base: "md", md: "lg" }}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => handlePageChange(e)}
          pageCount={data ? data.total_pages - 1 : 0}
          previousLabel="<"
          renderOnZeroPageCount={null}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
        />
      </Box>
    </Container>
  );
};

export default Home;
