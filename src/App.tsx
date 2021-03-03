import React, { useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Project } from "./containers/Projects/Projects";
import { Home } from "./containers/Home/Home";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Menu isOpen={isOpen} toggle={handleToggle} />
                <Switch>
                  <Route path="/projects" component={Project}/>
                  <Route path="/about" component={() => <h1>About page</h1>}/>
                  <Route exact path="/contact" component={() => <h1>Contact page!</h1>}/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/" component={() => <h1>There is an error</h1>}/>
                </Switch>
            </ChakraProvider>
        </BrowserRouter>
    );
};
