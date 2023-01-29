import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityPage from "./components/CityPage";
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    typography: {
        fontSize: 16,
    }
});

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <Router>
            <ThemeProvider theme={theme}>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/city/:name" element={<CityPage/>}/>
                    </Routes>
                </Container>
            </ThemeProvider>
        </Router>
    );