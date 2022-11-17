import {
  MdBookmarkBorder,
  MdBookmark,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { Stack, Button, useToast } from "@chakra-ui/react";

const SerieButtons = ({ serieData, misSeries, setmisSeries }) => {
  const toast = useToast();

  const handleAddSerie = (e) => {
    if (serieYaAgregada(e.target.name, serieData)) {
      return;
    }
    setmisSeries((prevState) => ({
      ...prevState,
      [e.target.name]: [...prevState[e.target.name], serieData],
    }));
    toast({
      title: `Serie agregada a ${e.target.title}`,
      status: "success",
      duration: 1000,
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
    });
  };

  const serieYaAgregada = (target, data) => {
    if (misSeries[target].find((serie) => serie.id === data.id)) {
      return true;
    }
  };

  return (
    <>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        mt="3rem"
        fontSize={{ base: "md", md: "lg" }}
      >
        <Button
          fontSize={{ base: "md", md: "lg" }}
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
          title="favoritos"
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
          fontSize={{ base: "md", md: "lg" }}
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
    </>
  );
};
export default SerieButtons;
