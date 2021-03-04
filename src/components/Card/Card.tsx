import { Badge, Box, Heading, Image, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";

export interface CardProps {
    tags: string[];
    imageProps: {
        imageSrc: string;
        imageAlt: string;
    };
    header: string;
    description: string;
}

export const Card: React.FC<CardProps> = (props) => {
    const { tags, imageProps, header, description } = props;
    const {colorMode} = useColorMode();

    return (
        <Box maxWidth="md" borderRadius="md" overflow="hidden" boxShadow="lg" bgColor={colorMode === 'dark' ? "gray.900" : "gray.100"}>
            <Image src={imageProps.imageSrc} alt={imageProps.imageAlt} />
            <Box p="4">
                {tags.map((el) => {
                    return (
                        <Badge
                            borderRadius="full"
                            paddingX="2"
                            paddingY="1"
                            marginRight="2"
                            variant="outline"
                            fontWeight="normal"
                            fontSize="10px"
                            color={colorMode === 'dark' ? "gray.200" : "gray.800"}
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
        </Box>
    );
};
