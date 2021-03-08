import { Badge, Box, Button, ButtonGroup, Center, Heading, Image, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

export interface CardProps {
    tags: string[];
    imageProp: string;
    header: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
}

export const Card: React.FC<CardProps> = ({ tags, imageProp, header, description, githubUrl, demoUrl }) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            maxWidth="md"
            borderRadius="md"
            overflow="hidden"
            boxShadow="dark-lg"
            bgColor={colorMode === "dark" ? "gray.900" : "gray.200"}
        >
            <Image src={imageProp} alt={imageProp} height="250px" width="full" objectFit="contain" />
            <Box p="4">
                <Box minHeight="120px">
                    {tags.map((el) => {
                        return (
                            <Badge
                                key={el}
                                borderRadius="full"
                                paddingX="2"
                                paddingY="1"
                                marginRight="2"
                                variant="outline"
                                fontWeight="normal"
                                fontSize="10px"
                                borderColor={colorMode === "dark" ? "gray.400" : "gray.800"}
                                color={colorMode === "dark" ? "gray.400" : "gray.800"}
                            >
                                {el}
                            </Badge>
                        );
                    })}
                    <VStack alignItems="start" marginY="2" spacing="0.5">
                        <Heading fontSize="2xl" fontWeight="normal">
                            {header}
                        </Heading>
                        <Text>{description}</Text>
                    </VStack>
                </Box>
                <Center marginTop="4">
                    <ButtonGroup spacing="8">
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                            <Button
                                _hover={{ bgColor: colorMode === "light" ? "gray.400" : "gray.600" }}
                                rightIcon={<FaLink />}
                            >
                                Github
                            </Button>
                        </a>
                        {demoUrl && (
                            <a href={demoUrl} target="_blank" rel="noreferrer">
                                <Button
                                    _hover={{ bgColor: colorMode === "light" ? "gray.400" : "gray.600" }}
                                    rightIcon={<FaExternalLinkAlt />}
                                >
                                    Demo
                                </Button>
                            </a>
                        )}
                    </ButtonGroup>
                </Center>
            </Box>
        </Box>
    );
};
