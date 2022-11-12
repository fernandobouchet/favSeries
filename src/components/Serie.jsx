import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerie } from "../utils/api";
import { Container, Box, Image, Flex, Text } from "@chakra-ui/react";

const Serie = () => {
  const { id } = useParams();

  const [serieData, setSerieData] = useState();
  console.log(serieData);

  useEffect(() => {
    getSerie(id).then((result) => setSerieData(result));
  }, []);

  return (
    <Container maxWidth={"1024px"}>
      {serieData && (
        <Box
          overflow="hidden"
          h={"100%"}
          background={`url(https://image.tmdb.org/t/p/original/${serieData.backdrop_path}) top/cover no-repeat`}
        >
          <Flex
            backdropFilter="auto"
            backdropBlur="2px"
            backdropBrightness="40%"
            direction={{ base: "column", sm: "row" }}
          >
            <Image
              m={"auto"}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              maxWidth={"250px"}
              src={`https://image.tmdb.org/t/p/original/${serieData.poster_path}`}
              alt={serieData.name}
            />
            <Flex direction={"column"} mt="auto" p="5" color={"whiteAlpha.900"}>
              <Text
                mt="1"
                fontWeight="semibold"
                as="h2"
                lineHeight="tight"
                noOfLines={1}
              >
                {serieData.name}
              </Text>
              <Text as="cite" mt="1">
                {serieData.tagline}
              </Text>
              <Text mt="1" as="p">
                {serieData.overview}
              </Text>
            </Flex>
          </Flex>
        </Box>
      )}
    </Container>
  );
};
export default Serie;
