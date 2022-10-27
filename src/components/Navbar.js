import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Diversity1, Language, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

import { UIContext } from "../store/ui-context";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 1px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { toggleLanguage } = useContext(UIContext);
  const { t } = useTranslation();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SOCIALIFY
        </Typography>
        <Diversity1
          sx={{
            display: { xs: "block", sm: "none" },
            width: "30px",
            height: "30px",
            color: "yellow",
          }}
        />
        <Search>
          <InputBase
            placeholder={t("navbar__search__input__place-holder")}
            sx={{
              padding: "0 5px",
              width: "100%",
              color: "#333",
            }}
          />
        </Search>
        <Icons>
          <Box onClick={toggleLanguage}>
            <Language />
          </Box>

          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Jane Doe"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: "30px", height: "30px" }}
            onClick={() => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            alt="Jane Doe"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: "30px", height: "30px" }}
          />
          <Typography variant="span">Jane</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>{t("navbar__icons__menu-item--profile")}</MenuItem>
        <MenuItem>{t("navbar__icons__menu-item--my-account")}</MenuItem>
        <MenuItem>{t("navbar__icons__menu-item--log-out")}</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
