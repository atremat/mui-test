import "./App.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
