import { Link } from "react-router-dom";
import { AspectRatio, Box, Image } from "@chakra-ui/react";

const SerieCard = ({ data }) => {
  const { name, id, poster_path } = data;

  return (
    <>
      <Box
        as={Link}
        to={`serie/${id}`}
        borderRadius="lg"
        overflow="hidden"
        h={"100%"}
        transition=".2s"
        _hover={{
          filter: "auto",
          blur: "2px",
          brightness: "20%",
          cursor: "pointer",
        }}
      >
        <AspectRatio maxW="400px" ratio={2 / 3}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={name}
            objectFit="cover"
          />
        </AspectRatio>
        <Box p="2">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SerieCard;
