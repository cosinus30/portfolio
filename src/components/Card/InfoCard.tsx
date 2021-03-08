import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, List, ListItem as ListItemCU } from "@chakra-ui/layout";
import React from "react";
import css from "./InfoCard.module.css";

interface InfoCardProps {
    title: string;
    items: string[];
}

interface ListItemProps {
    text: string;
}
const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return <ListItemCU fontSize="1.15em">{text}</ListItemCU>;
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, items }) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            maxWidth="md"
            bgColor="gray.900"
            padding="8"
            borderRadius="md"
            boxShadow="dark-lg"
            whiteSpace="nowrap"
            backgroundColor={colorMode === "dark" ? "gray.900" : "gray.200"}
        >
            <Heading fontSize="2xl" fontWeight="regular" className={css.MakeItBigger}>
                {title}
            </Heading>
            <List marginTop="2">
                {items.map((el) => {
                    return <ListItem text={el} />;
                })}
            </List>
        </Box>
    );
};
