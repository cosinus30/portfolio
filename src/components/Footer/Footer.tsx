import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Container, Text } from "@chakra-ui/layout";
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Box width="full" bgColor={colorMode === "dark" ? "gray.900" : "gray.200"} padding="12">
            <Container maxWidth="container.md">
                <Text fontSize="1.15em">yunuskeremturk@gmail.com</Text>
                <Text marginY="2" fontWeight="light">
                    Always in the mood to collaborate! Let's get in touch.
                </Text>
                <ButtonGroup spacing="4">
                    <a href="mailto:yunuskeremturk@gmail.com" target="_blank" rel="noreferrer">
                        <IconButton
                            bgColor={colorMode === "dark" ? "gray.900" : "gray.400"}
                            icon={<FaEnvelope />}
                            aria-label="Send Mail"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yunus-kerem-t%C3%BCrk-2659a4144/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton
                            bgColor={colorMode === "dark" ? "gray.900" : "gray.400"}
                            icon={<FaLinkedin />}
                            aria-label="Linked in"
                        />
                    </a>
                </ButtonGroup>
                <Text marginY="2" fontWeight="thin" fontSize="0.85em">
                    Build with React by Yunus Kerem Turk.
                </Text>
            </Container>
        </Box>
    );
};
