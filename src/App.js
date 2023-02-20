import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar/>
          hello
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


// Time: 50:54
export default App;
