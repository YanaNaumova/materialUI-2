import "./App.css";
import ButtonGroup from "./components/buttonGroup";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ButtonGroup />
    </ThemeProvider>
  );
}

export default App;
