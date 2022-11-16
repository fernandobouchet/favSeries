import { Container } from "@chakra-ui/react";
import Grid from "../components/Grid";

const MisSeries = ({ data }) => {
  return (
    <Container maxWidth={"1024px"} minHeight={"100vh"}>
      {data && <Grid data={data} />}
    </Container>
  );
};

export default MisSeries;
