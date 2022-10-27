import { createContext, Fragment, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useTranslation } from "react-i18next";

export const UIContext = createContext({
  mode: "light",
  language: "en",
  direction: "ltr",
  toggleLanguage: () => {},
  toggleMode: () => {},
});

const UIContextProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    direction: language === "en" ? "ltr" : "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const toggleMode = () => {
    setMode((prevState) => {
      if (prevState === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  const toggleLanguage = () => {
    setLanguage((prevStete) => {
      switch (prevStete) {
        case "en":
          theme.direction = "rtl";
          document.dir = "rtl";
          i18n.changeLanguage("fa");
          return "fa";
        case "fa":
          document.dir = "ltr";
          theme.direction = "ltr";
          i18n.changeLanguage("en");
          return "en";

        default:
          break;
      }
    });
  };

  const store = {
    mode,
    language,
    direction: theme.direction,
    toggleLanguage,
    toggleMode,
  };

  return (
    <UIContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        {language === "fa" && (
          <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
        )}
        {language === "en" && <Fragment>{props.children}</Fragment>}
      </ThemeProvider>
    </UIContext.Provider>
  );
};

export default UIContextProvider;
