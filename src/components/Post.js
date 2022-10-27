import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material";

const Post = (props) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar alt={props.pageName} src={props.pageAvatar} />}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={props.pageName}
        subheader={props.postDate}
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.postImg}
        alt={props.postImgTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.postCaption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
