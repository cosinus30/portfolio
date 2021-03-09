import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaBars, FaHamburger, FaTimes } from "react-icons/fa";

export interface MenuToggleProps {
    toggle: () => void;
    isOpen: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = (props) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
            {props.isOpen ? (
                <IconButton aria-label="Close" icon={<FaTimes />} />
            ) : (
                <IconButton aria-label="Close" icon={<FaBars />} />
            )}
        </Box>
    );
};
