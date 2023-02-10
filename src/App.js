import "./App.css";
import Home from "./Components/Home";
import { Box } from "@mui/system";

function App() {
  const style = {};
  return (
    <Box sx={style.mainCon}>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </header>
      <Home></Home>
    </Box>
  );
}

export default App;
