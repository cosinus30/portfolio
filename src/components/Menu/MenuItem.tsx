import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Text, useColorMode } from "@chakra-ui/react";

export interface MenuItemProps {
    to: string;
    toggle: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { colorMode } = useColorMode();

    const location = useLocation();
    const isActive = location.pathname === props.to;

    return (
        <Box marginX="1">
            <Link to={props.to} onClick={props.toggle}>
                <Text
                    borderBottom={isActive ? "1px" : "none"}
                    fontWeight={isActive ? "medium" : "light"}
                    display="block"
                    margin={2}
                    color={colorMode === "dark" ? "white" : "gray.800"}
                >
                    {props.children}
                </Text>
            </Link>
        </Box>
    );
};
