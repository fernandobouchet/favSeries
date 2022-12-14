import { extendTheme, keyframes } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const styles = {
  global: {
    body: {
      color: "whiteAlpha.900",
      bg: "rgba(0, 0, 0, 0.10)",
      height: "100%",
    },
    header: {
      display: "flex",
      gap: "0.5rem",
      flexDirection: "column",
      padding: "1rem",
      maxWidth: "1024px",
      margin: "auto",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      margin: "1rem 0",
    },
    "li.selected": {
      background: "var(--chakra-colors-whiteAlpha-900)",
      color: "var(--chakra-colors-gray-900)",
    },
    li: {
      borderColor: "var(--chakra-colors-whiteAlpha-300)",
      color: "var(--chakra-colors-whiteAlpha-900)",
      padding: "0.1rem 0.6rem",
      fontWeight: "bold",
      borderRadius: "5rem",
      a: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      },
    },
    ".animation": {
      animationName: `${fadeIn}`,
      animationTimingFunction: "ease-in",
      animationDuration: "1s",
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
