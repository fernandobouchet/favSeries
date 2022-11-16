import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { getSerie } from "../utils/api";
import {
  Image as ChakraImage,
  Flex,
  Text,
  Center,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";

const Serie = ({ misSeries, setmisSeries }) => {
  const { id } = useParams();

  const [serieData, setSerieData] = useState();
  const [isLoaded, setIsLoaded] = useState(0);

  const toast = useToast();

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

  const handleAddSerie = (e) => {
    if (serieYaAgregada(e.target.name, serieData)) {
      return;
    }
    setmisSeries((prevState) => ({
      ...prevState,
      [e.target.name]: [...prevState[e.target.name], serieData],
    }));
    toast({
      title: `Serie añadida a ${e.target.title}`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleRemoveSerie = (e) => {
    setmisSeries((prevState) => ({
      ...prevState,
      [e.target.name]: [
        ...prevState[e.target.name].filter(
          (serie) => serie.id !== serieData.id
        ),
      ],
    }));
    toast({
      title: `Serie eliminada de ${e.target.title}`,
      status: "info",
      duration: 1000,
      isClosable: true,
    });
  };

  const serieYaAgregada = (target, data) => {
    if (misSeries[target].find((serie) => serie.id === data.id)) {
      return true;
    }
  };

  return (
    <>
      {isLoaded >= 2 ? (
        <Center
          mt={6}
          className="animation"
          background={`linear-gradient(to top, black, transparent),url(https://image.tmdb.org/t/p/original/${serieData.backdrop_path}) center center/cover no-repeat`}
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
              borderRadius="lg"
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
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  mt="3rem"
                >
                  <Button
                    leftIcon={
                      !serieYaAgregada("favoritas", serieData) ? (
                        <MdFavoriteBorder />
                      ) : (
                        <MdFavorite />
                      )
                    }
                    colorScheme="gray"
                    variant="outline"
                    name="favoritas"
                    title="favoritas"
                    onClick={
                      !serieYaAgregada("favoritas", serieData)
                        ? (e) => handleAddSerie(e)
                        : (e) => handleRemoveSerie(e)
                    }
                  >
                    {!serieYaAgregada("favoritas", serieData)
                      ? "Agregar a favoritos"
                      : "Eliminar de favoritos"}
                  </Button>
                  <Button
                    leftIcon={
                      !serieYaAgregada("verMasTarde", serieData) ? (
                        <MdBookmarkBorder />
                      ) : (
                        <MdBookmark />
                      )
                    }
                    colorScheme="gray"
                    variant="outline"
                    name="verMasTarde"
                    title="ver más tarde"
                    onClick={
                      !serieYaAgregada("verMasTarde", serieData)
                        ? (e) => handleAddSerie(e)
                        : (e) => handleRemoveSerie(e)
                    }
                  >
                    {!serieYaAgregada("verMasTarde", serieData)
                      ? "Agregar a ver más tarde"
                      : "Eliminar de ver más tarde"}
                  </Button>
                </Stack>
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
