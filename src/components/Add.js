import { Fragment, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
  DateRange,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  });

  const modalOpenHandler = () => {
    setOpen(true);
  };
  const modalCloseHandler = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Tooltip
        title={t("add-post__tooltip__title")}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
        onClick={modalOpenHandler}
      >
        <Fab color="primary" size="medium">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal open={open} onClose={modalCloseHandler}>
        <Box
          width={400}
          height={280}
          // bgcolor="white"
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="Jane Doe"
              src="https://mui.com/static/images/avatar/3.jpg"
              sx={{ width: "30px", height: "30px" }}
            />
            <Typography variant="span" fontWeight="500">
              Jane Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginBottom: "10px" }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />

          <Stack direction="row" gap={1} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
            <Button> Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Fragment>
  );
};

export default Add;
