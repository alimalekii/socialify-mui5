import { useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
  LightMode,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { UIContext } from "../store/ui-context";

const Sidebar = () => {
  const { toggleMode, mode } = useContext(UIContext);
  const { t } = useTranslation();
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--homepage")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--pages")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--groups")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--marketplace")} />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--friends")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--settings")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary={t("sidebar__item--profile")} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {mode === "dark" ? (
                <LightMode sx={{ color: "yellow" }} />
              ) : (
                <ModeNight />
              )}
            </ListItemIcon>
            <Switch defaultChecked onChange={toggleMode} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
