import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerie } from "../utils/api";
import { Image as ChakraImage, Flex, Text, Center } from "@chakra-ui/react";
import SerieButtons from "../components/SerieButtons";

const Serie = ({ misSeries, setmisSeries }) => {
  const { id } = useParams();

  const [serieData, setSerieData] = useState();
  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(() => {
    getSerie(id).then((result) => setSerieData(result));
  }, []);

  useEffect(() => {
    const image1 = new Image();
    image1.src =
      serieData &&
      `https://image.tmdb.org/t/p/original/${serieData.backdrop_path}`;
    image1.onload = () => setIsLoaded((prevState) => prevState + 1);
    const image2 = new Image();
    image2.src =
      serieData &&
      `https://image.tmdb.org/t/p/original/${serieData.poster_path}`;
    image2.onload = () => setIsLoaded((prevState) => prevState + 1);
  }, [serieData]);

  return (
    <>
      {isLoaded >= 2 ? (
        <Center
          mt={6}
          className="animation"
          background={`linear-gradient(to top, black, transparent),url(https://image.tmdb.org/t/p/original/${serieData.backdrop_path}) center center/cover no-repeat`}
          fontSize={{ base: "md", md: "lg" }}
        >
          <Flex
            height={"100vh"}
            alignItems={"center"}
            backdropFilter="auto"
            backdropBlur="2px"
            backdropBrightness="60%"
            width={"100%"}
            justifyContent="center"
          >
            <Flex
              bgColor={"rgba(0, 0, 0, 0.8)"}
              border={"1px transparent"}
              borderRadius={{ base: "0", xl: "lg" }}
              justifyContent="center"
              direction={{ base: "column", sm: "row" }}
              maxW="1024px"
            >
              <ChakraImage
                m={"auto"}
                p={4}
                border={"1px transparent"}
                borderRadius="lg"
                maxWidth={"250px"}
                src={`https://image.tmdb.org/t/p/original/${serieData.poster_path}`}
                alt={serieData.name}
              />
              <Flex
                direction={"column"}
                justifyContent="center"
                p="4"
                color={"whiteAlpha.900"}
              >
                <Text mt="2" fontWeight="semibold" as="h2" lineHeight="tight">
                  {serieData.name} - (
                  {new Date(serieData.first_air_date).getFullYear()})
                </Text>
                <Text as="cite" mt="2">
                  {serieData.tagline}
                </Text>
                <Text mt="2" as="p">
                  {serieData.overview}
                </Text>
                <SerieButtons
                  misSeries={misSeries}
                  setmisSeries={setmisSeries}
                  serieData={serieData}
                />
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : (
        <Center minHeight={"100vh"}></Center>
      )}
    </>
  );
};
export default Serie;
