import { Fragment, useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import Post from "./Post";

import posts from "../data/postData";

const Feed = () => {
  const [loading, setLoading] = useState(false);

  // setTimeout(() => {
  //   setLoading(false);
  // }, [3000]);

  let content;

  if (loading) {
    content = (
      <Stack spacing={1}>
        <Skeleton variant="text" height={100} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="rectangular" height={300} />
      </Stack>
    );
  } else {
    content = (
      <Fragment>
        {posts.map((post) => (
          <Post
            key={post.postId}
            pageName={post.pageName}
            pageAvatar={post.pageAvatar}
            postTitle={post.postTitle}
            postImg={post.postImg}
            postImgTitle={post.postImgTitle}
            postDate={post.postDate}
            postCaption={post.postCaption}
          />
        ))}
      </Fragment>
    );
  }

  return (
    <Box flex={4} p={2}>
      {content}
    </Box>
  );
};

export default Feed;
