import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { getSerie } from "../utils/api";
import { Image, Flex, Text, Center, Stack, Button } from "@chakra-ui/react";

const Serie = ({ misSeries, setmisSeries }) => {
  const { id } = useParams();

  const [serieData, setSerieData] = useState();

  useEffect(() => {
    getSerie(id).then((result) => setSerieData(result));
  }, []);

  return (
    <>
      {serieData && (
        <Center
          background={`linear-gradient(to top, black, transparent),url(https://image.tmdb.org/t/p/original/${serieData.backdrop_path}) center center/cover no-repeat`}
        >
          <Flex
            alignItems={"center"}
            height={"calc(100vh - 7rem)"}
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
              <Image
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
                    leftIcon={<MdFavoriteBorder />}
                    colorScheme="gray"
                    variant="outline"
                    onClick={() =>
                      setmisSeries((prevState) => ({
                        ...prevState,
                        favoritas: [...prevState.favoritas, serieData],
                      }))
                    }
                  >
                    Agregar a favoritos
                  </Button>
                  <Button
                    leftIcon={<MdBookmarkBorder />}
                    colorScheme="gray"
                    variant="outline"
                    onClick={() =>
                      setmisSeries((prevState) => ({
                        ...prevState,
                        verMasTarde: [...prevState.verMasTarde, serieData],
                      }))
                    }
                  >
                    Agregar a ver más tarde
                  </Button>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      )}
    </>
  );
};
export default Serie;
