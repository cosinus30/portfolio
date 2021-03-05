import React from "react";
import { Button, ButtonGroup, Center, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Card } from "../../components/Card/Card";
import { projects } from "../../data/Data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Project: React.FC = (props) => {
    // const { colorMode } = useColorMode();
    return (
        <Container maxWidth="container.lg">
            <Stack direction="column" spacing="8">
                <Heading marginTop="12">Projects</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
                    {projects.map((el) => {
                        return (
                            <Card
                                description={el.description}
                                header={el.header}
                                imageProps={el.imageProps}
                                tags={el.tags}
                            />
                        );
                    })}
                </SimpleGrid>
                <Center>
                    <ButtonGroup spacing="12" marginBottom="8">
                        <a href="https://github.com/cosinus30/" target="_blank" rel="noreferrer">
                            <Button rightIcon={<FaGithub />}>Github</Button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yunus-kerem-t%C3%BCrk-2659a4144/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button rightIcon={<FaLinkedin />}>Linkedin</Button>
                        </a>
                    </ButtonGroup>
                </Center>
            </Stack>
        </Container>
    );
};
