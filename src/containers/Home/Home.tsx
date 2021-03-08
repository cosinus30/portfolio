import React from "react";
import { AboutRow } from "../../components/AboutRow/AboutRow";
import { projects } from "../../data/Data";
import Project1 from "../../assets/moviesnseries.png";
import Project2 from "../../assets/publishingplatform.png";
import Project3 from "../../assets/yelpcampclone.png";
import Project4 from "../../assets/jiraloganalytics.png";
import Project5 from "../../assets/meetingsrestapi.png";
import { Box, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { FaArrowRight } from "react-icons/fa";

export const Home: React.FC = () => {
    const imageArr = [Project1, Project2, Project3, Project4, Project5];

    return (
        <>
            <AboutRow />
            <Container maxWidth="container.lg" centerContent>
                <Stack direction="column" spacing="8">
                    <Heading marginTop="12">Some of my projects</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {projects.map((el, index) => {
                            return (
                                index < 4 && (
                                    <Card
                                        key={el.header}
                                        description={el.description}
                                        header={el.header}
                                        imageProp={imageArr[index]}
                                        tags={el.tags}
                                        githubUrl={el.githubUrl}
                                        demoUrl={el.demoUrl}
                                    />
                                )
                            );
                        })}
                    </SimpleGrid>
                </Stack>
                <Box align="end" margin="8">
                    <Link to="/projects">
                        <Button rightIcon={<FaArrowRight/>} variant="ghost">See all</Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
};
