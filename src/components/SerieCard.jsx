import {
  AspectRatio,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";

const SerieCard = ({ data }) => {
  const { name, vote_average, poster_path } = data;

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        h={"100%"}
        transition=".2s"
        _hover={{ filter: "auto", blur: "2px", cursor: "pointer" }}
      >
        <CircularProgress
          zIndex={1}
          value={vote_average * 10}
          color="green.400"
          pos="absolute"
          p="1"
          ml={"auto"}
        >
          <CircularProgressLabel color="whiteAlpha.900" fontWeight={"bold"}>
            {vote_average * 10}%
          </CircularProgressLabel>
        </CircularProgress>
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
