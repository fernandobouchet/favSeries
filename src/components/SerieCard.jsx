import { Link } from "react-router-dom";
import { AspectRatio, Box, Image, Skeleton, Text } from "@chakra-ui/react";
import { useState } from "react";

const SerieCard = ({ data }) => {
  const { name, first_air_date, id, poster_path } = data;

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Box
        data-group
        as={Link}
        to={`/serie/${id}`}
        border="0.01px solid var(--chakra-colors-whiteAlpha-300)"
        borderRadius="lg"
        overflow="hidden"
        h={"100%"}
        transition=".2s"
        _hover={{
          filter: "auto",
          blur: "2px",
          brightness: "40%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          cursor: "pointer",
        }}
        display="block"
      >
        <Skeleton isLoaded={isLoaded}>
          <AspectRatio maxW="400px" ratio={2 / 3}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={name}
              objectFit="cover"
              onLoad={() => setIsLoaded(true)}
            />
          </AspectRatio>
          <Box p="2">
            <Text
              fontWeight="semibold"
              as="h2"
              lineHeight="tight"
              noOfLines={1}
            >
              {name}
            </Text>
            <Text as="sub" color={"whiteAlpha.700"}>
              {new Date(first_air_date).getFullYear()}
            </Text>
          </Box>
        </Skeleton>
      </Box>
    </>
  );
};
export default SerieCard;
