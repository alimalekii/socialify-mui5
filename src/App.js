import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{
          justifyContent: {
            sm: "space-between",
            md: "space-around",
          },
        }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
