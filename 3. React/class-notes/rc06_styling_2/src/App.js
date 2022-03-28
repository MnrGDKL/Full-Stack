import './App.css';
import StyledComponent from './components/styledComponent/StyledComponent';
import MaterialUi from './components/materialUi/MaterialUi';
import {createTheme, ThemeProvider} from "@mui/material";
import {orange, green} from "@mui/material/colors";

function App() {

  const myTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[300],
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
          {/* <StyledComponent /> */}
          <MaterialUi/>
    </ThemeProvider>
  );
}

export default App;


