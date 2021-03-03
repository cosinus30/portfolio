import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuLogo: React.FC = (props) => {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                <Link to={"/"}>
                    YKT
                </Link>
            </Text>
        </Box>
    );
};
