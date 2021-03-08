import { Button, ButtonGroup } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactComponent as Me } from "../../assets/boo1.svg";
import { InfoCard } from "../../components/Card/InfoCard";
import css from "./About.module.css";

export const About: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box backgroundColor={colorMode === "dark" ? "gray.900" : "gray.200"}>
                <Container maxWidth="container.md" centerContent marginTop="16" padding="8">
                    <Stack textAlign="center" alignItems="center">
                        <Me width="200px" height="200px" />
                        <Heading>Hello, I am Yunus Kerem Turk!</Heading>
                        <Text fontSize="1.15em">I am a senior Computer Engineering student at TOBB ETU.</Text>
                        <Text fontSize="1.15em">
                            I am a keen, always improving tech enthusiast who loves to try out new technologies and have
                            fun with them. I am also interested in algorithm design, and design patterns.{" "}
                        </Text>
                        <Text fontSize="1.15em">Apart from that, I love to read, cook, play games.</Text>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="container.lg" centerContent marginTop="16">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="16" spacingY="8">
                    <InfoCard items={["React", "Spring Boot"]} title="My Current Stack" />
                    <InfoCard items={["DjangoRestFramework", "Design Patterns", "Flutter"]} title="What I'm Learning" />
                    <InfoCard items={["Gatsby", "UX-UI"]} title="What I Want to Learn" />
                    <InfoCard items={["Electron", "Express", "Angular"]} title="Things that I've Tried" />
                </SimpleGrid>

                <Box
                    backgroundColor={colorMode === "dark" ? "gray.900" : "gray.200"}
                    boxShadow="dark-lg"
                    borderRadius="md"
                    padding="16"
                    marginY="12"
                >
                    <Heading>My Story</Heading>
                    <Text className={css.MakeItBigger} fontSize="1.10em">
                        Of course it is not possible to put my whole tech adventure into three little cards. So at this
                        point, I want to tell you my story.
                    </Text>
                    <Text className={css.MakeItBigger} fontSize="1.10em">
                        Everything began with me starting to college. It was the first time I code, and I was astonished
                        that a machine is doing something that I want it to do. We are taught Java and C in college, and
                        until end of the second year I was not interested in new programming language. I was learning
                        the basics, afterall. In my first years, my attention mostly focused on my classes. I had
                        special interest in algorithm design and data structures. Then, I decided to learn Web
                        Programming.
                    </Text>
                    <Text className={css.MakeItBigger} fontSize="1.10em">
                        I learned the basics first, how web works, what is request, response, and so on. Then I learnt
                        my first backend framework Express, and enough Html, CSS to build a website. After that, I did
                        an internship at Ekodenge, which is developing sustainability solutions in a countrywide and
                        Europe based projects. I worked as a fullstack engineer there, and got a chance to try new
                        technologies such as Electron, DjangoRestFramework, .Net. and angularJs.
                    </Text>
                    <Text className={css.MakeItBigger} fontSize="1.10em">
                        Next, I finally met with React. Since then, it was my way to go to build a frontend. Luckily, I
                        had a chance to work with React, and Spring Boot in my internship at Innova, and these two are
                        my current strengths. Recently, I worked with Flutter a little; and loved it but I had no time
                        to study further. Nowadays, I am trying to learn a new backend framework, if I can find time
                        from my classes. I haven’t decided whether it should be DjangoRest or Fastify, so I am learning
                        both in parallel till I decide one over another .
                    </Text>
                    <Text className={css.MakeItBigger} fontSize="1.10em">
                        Coding aside, I like to design my websites and most of my projects were designed beforehand with
                        Figma.
                    </Text>
                </Box>
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
            </Container>
        </>
    );
};

//
//
//
//
//
