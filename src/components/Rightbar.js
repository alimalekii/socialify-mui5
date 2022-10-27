import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useTranslation } from "react-i18next";

const Title = ({ children }) => (
  <Typography variant="h6" fontWeight="100" mb={2} mt={2}>
    {children}
  </Typography>
);

const Rightbar = () => {
  const { t } = useTranslation();

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          overflowY: "scroll",
          top: "64px",
          bottom: 0,
          right: "64px",
          width: {
            sm: 200,
            md: 250,
            lg: 300,
          },

          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Title>{t("rightbar__section---online-firends__title")}</Title>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <AvatarGroup max={5}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/7.jpg"
            />
          </AvatarGroup>
        </Box>

        <Title>{t("rightbar__section---save-photos__title")}</Title>
        <ImageList cols={2} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format"
              alt=""
              loading="lazy"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=248&fit=crop&auto=format"
              alt=""
              loading="lazy"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=248&fit=crop&auto=format"
              alt=""
              loading="lazy"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format"
              alt=""
              loading="lazy"
            ></img>
          </ImageListItem>
        </ImageList>
        <Title>{t("rightbar__section---latest-conversation__title")}</Title>
        <Box m={0}>
          <ConversationItem
            name="Alie Conner"
            img="https://mui.com/static/images/avatar/7.jpg"
            text="Brunch this weekend?"
            title="I'll be in your neighborhood doing errands this…"
          />
          <ConversationItem
            name="Scott Miller"
            img="https://mui.com/static/images/avatar/6.jpg"
            text="Meeting in meusem :)"
            title="Wish I could come, but I'm out of town this..."
          />
          <ConversationItem
            name="Sandra Adams"
            img="https://mui.com/static/images/avatar/3.jpg"
            text="Oui Oui"
            title="Do you have Paris recommendations? Have you ever…"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
