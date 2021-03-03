import React from "react";
import { Box, Center, Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { MenuToggle, MenuToggleProps } from "./MenuToggle";
import { MenuLogo } from "./MenuLogo";
import { MenuItem } from "./MenuItem";

export const Menu: React.FC<MenuToggleProps> = (props) => {
    const { isOpen, toggle } = props;
    const { colorMode } = useColorMode();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg={colorMode === "dark" ? "gray.900" : "gray.100"}
        >
            <Flex align="center" mr={5}>
                <MenuLogo />
            </Flex>
            <MenuToggle isOpen={isOpen} toggle={toggle} />
            <Box
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                flexGrow={1}
            >
                <MenuItem to={"/projects"} toggle={toggle}>
                    Projects
                </MenuItem>
                <MenuItem to={"/about"} toggle={toggle}>
                    About
                </MenuItem>
                <MenuItem to={"/contact"} toggle={toggle}>
                    Contact
                </MenuItem>
            </Box>

            <Box display={{ base: isOpen ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
                <ColorModeSwitcher justifySelf="flex-end" bgColor={colorMode === "dark" ? "gray.700" : "gray.300"} />
            </Box>
        </Flex>
    );
};
