import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";

import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {

    const mode = useSelector((state)=> state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider  theme={theme}> 
      <CssBaseline/>
      <Routes>
        <Route path="/" element={ <LoginPage/> }></Route>
        <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />}></Route>
        <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />}></Route>
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;