import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Leftsidebar } from "./scenes/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />
      <div className="app">
        <Leftsidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            {/* <Route path="/team" element={<Team/>}/> */}
            {/* <Route path="/contacts" element={<Contacts/>}/> */}
            {/* <Route path="/invoice" element={<Invoices/>}/> */}
            {/* <Route path="/form" element={<Form/>}/> */}
            {/* <Route path="/bar" element={<Bar/>}/> */}
            {/* <Route path="/pie" element={<Pie/>}/> */}
            {/* <Route path="/line" element={<Line/>}/> */}
            {/* <Route path="/faq" element={<FAQ/>}/> */}
            {/* <Route path="/geography" element={<Geography/>}/> */}
            {/* <Route path="/calendar" element={<Calendar/>}/> */}
          </Routes>
        </main>
      </div>
      </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


// Time: 1:7:5
export default App;
