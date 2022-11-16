import { Box, Container } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import Grid from "../components/Grid";

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
