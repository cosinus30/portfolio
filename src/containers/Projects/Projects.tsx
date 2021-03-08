import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Center, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Card } from "../../components/Card/Card";
import { projects } from "../../data/Data";
import { FaGithub } from "react-icons/fa";
import Project1 from "../../assets/moviesnseries.png";
import Project2 from "../../assets/publishingplatform.png";
import Project3 from "../../assets/burgerBuilder.png";
import Project4 from "../../assets/yelpcampclone.png";
import Project7 from "../../assets/jiraloganalytics.png";
import Project5 from "../../assets/meetingsrestapi.png";
import Project6 from "../../assets/excelRepportBuilder.png";

export const Project: React.FC = (props) => {

    const [imageArr] = useState([Project1, Project2, Project3, Project4, Project5, Project6, Project7]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return (
        <Container maxWidth="container.lg" centerContent>
            <Stack direction="column" spacing="8">
                <Heading marginTop="12">Projects</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    {projects.map((el, index) => {
                        return (
                            <Card
                                key={el.header}
                                description={el.description}
                                header={el.header}
                                imageProp={imageArr[index]}
                                tags={el.tags}
                                githubUrl={el.githubUrl}
                                demoUrl={el.demoUrl}
                            />
                        );
                    })}
                </SimpleGrid>
                <Center>
                    <ButtonGroup spacing="12" marginBottom="8">
                        <a href="https://github.com/cosinus30/" target="_blank" rel="noreferrer">
                            <Button rightIcon={<FaGithub />}>Github</Button>
                        </a>
                    </ButtonGroup>
                </Center>
            </Stack>
        </Container>
    );
};
