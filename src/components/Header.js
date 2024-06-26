import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Box,
} from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";



const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar style={{ display:"flex", justifyContent: "space-between" }} >
            <Box
            component="img"
              onClick={() => history.push(`/`)}
              src="Frame.png"
              style={{
                height: 50,
                width: 50,
                maxwidth:250,
                maxheight:250,

              }
              }
            //  className={classes.title} 
            />
              
            
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 80, height: 40, marginLeft: "auto"}}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>

            
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
