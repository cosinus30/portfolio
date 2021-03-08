import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Project } from "./containers/Projects/Projects";
import { Home } from "./containers/Home/Home";
import { About } from "./containers/About/About";
import { Footer } from "./components/Footer/Footer";

const myTheme = extendTheme({
    colors: {
      light: {
        100: "#effaf7",
      },
    },
    config: {
        initialColorMode: "dark",
    }
  })
  

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HashRouter>
            <ChakraProvider theme={myTheme}>
                <Menu isOpen={isOpen} toggle={handleToggle} />
                <Switch>
                    <Route path="/projects" component={Project} />
                    <Route path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={() => <h1>There is an error</h1>} />
                </Switch>
                <Footer />
            </ChakraProvider>
        </HashRouter>
    );
};
