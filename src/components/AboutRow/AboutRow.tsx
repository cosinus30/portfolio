import React from "react";
import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { ReactComponent as MeIcon } from "../../assets/boo1.svg";

export const AboutRow: React.FC = (props) => {
    const { colorMode } = useColorMode();
    return (
        <Flex
            flexDirection={{ base: "column", md: "row" }}
            width="100%"
            paddingY="10"
            bgColor={colorMode === "dark" ? "gray.700" : "gray.300"}
            justifyContent="center"
            alignItems="center"
        >
            <Box marginX="8">
                <MeIcon height="200px" />
            </Box>
            <Flex flexDirection="column" justifyContent="center" marginX="8">
                <Heading size="xl" fontWeight="normal">
                    Hello there, I am Yunus Kerem Turk!
                </Heading>
                <Text fontSize="xl">I am a full-stack developer who loves to try new technologies.</Text>
            </Flex>
        </Flex>
    );
};
