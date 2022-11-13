import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const styles = {
  global: {
    body: {
      color: "whiteAlpha.900",
      bg: "rgba(0, 0, 0, 0.10)",
    },
    header: {
      height: "7rem",
      padding: "1rem",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
    },
    "li.selected": {
      border: "1px solid",
      padding: "0 1rem",
    },
    li: {
      a: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      },
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
