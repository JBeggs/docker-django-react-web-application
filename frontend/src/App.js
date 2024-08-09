import React from "react";

import AuthHeader from "./Components/Auth/Header";
import MainContent from "./Components/MainContent";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import store from "./store";

const theme = createTheme();

export default function App (){
    
    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <AuthHeader store={store} />
                <MainContent store={store} />
            </div>
        </ThemeProvider>
    );
}
