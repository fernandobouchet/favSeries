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
    ul: { listStyle: "none", display: "flex", gap: "1rem" },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
