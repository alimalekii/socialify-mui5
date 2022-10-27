import { Fragment } from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const ConversationItem = (props) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src={props.img ? props.img : ""} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ fontSize: { sm: "14px", md: "18px" } }}>
              {props.title}
            </Typography>
          }
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline", fontSize: { sm: "10px" } }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.name}
              </Typography>
              {" - " + props.text}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default ConversationItem;
