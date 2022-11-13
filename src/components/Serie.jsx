import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerie } from "../utils/api";
import { Image, Flex, Text, Center } from "@chakra-ui/react";

const Serie = () => {
  const { id } = useParams();

  const [serieData, setSerieData] = useState();
  console.log(serieData);

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
            height={"calc(100vh - 91px)"}
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
                <Text mt="1" fontWeight="semibold" as="h2" lineHeight="tight">
                  {serieData.name} - (
                  {new Date(serieData.first_air_date).getFullYear()})
                </Text>
                <Text as="cite" mt="1">
                  {serieData.tagline}
                </Text>
                <Text mt="1" as="p">
                  {serieData.overview}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      )}
    </>
  );
};
export default Serie;
