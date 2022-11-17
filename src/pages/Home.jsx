import { Box, Container } from "@chakra-ui/react";
import Grid from "../components/Grid";
import Paginator from "../components/Paginator";

const Home = ({ data, setPage }) => {
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
        <Paginator data={data} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default Home;
