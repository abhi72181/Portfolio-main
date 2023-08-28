import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Text,
  Image,
  Button,
  HStack,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSlider = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      techStack: 'React, Node.js, MongoDB',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://project1-live-link.com',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      techStack: 'Vue.js, Express, PostgreSQL',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
      githubLink: 'https://github.com/yourusername/project2',
      liveLink: 'https://project2-live-link.com',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3.',
      techStack: 'Angular, Firebase',
      image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
      githubLink: 'https://github.com/yourusername/project3',
      liveLink: 'https://project3-live-link.com',
    },
    {
        title: 'Project 4',
        description: 'Description for Project 3.',
        techStack: 'Angular, Firebase',
        image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        githubLink: 'https://github.com/yourusername/project3',
        liveLink: 'https://project3-live-link.com',
      },
      {
        title: 'Project 5',
        description: 'Description for Project 3.',
        techStack: 'Angular, Firebase',
        image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        githubLink: 'https://github.com/yourusername/project3',
        liveLink: 'https://project3-live-link.com',
      },
      {
        title: 'Project 6',
        description: 'Description for Project 3.',
        techStack: 'Angular, Firebase',
        image: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        githubLink: 'https://github.com/yourusername/project3',
        liveLink: 'https://project3-live-link.com',
      },
    // Add more projects
  ];

  const columnCount = useBreakpointValue({ base: 1, sm: 2, lg: 3 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: columnCount,
    slidesToScroll: columnCount,
  };

  return (
    <Box id="projects" h="100vh" mt={8} width="100%" textAlign="center">
        <Text fontSize="xl" fontWeight="semibold" mt={4}>
              Projects
            </Text>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            shadow="md"
            width="100%"
            display="inline-block"
            boxSizing="border-box"
            verticalAlign="top"
            mb={columnCount === 1 ? 4 : 0}
            marginRight={columnCount === 1 ? 0 : 4}
            maxWidth={
              columnCount === 1
                ? '100%'
                : columnCount === 2
                ? '50%'
                : '66.66%'
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              height="200px"
            />
            <Text fontSize="xl" fontWeight="semibold" mt={4}>
              {project.title}
            </Text>
            <Text fontSize="md" color="gray.500" mt={2}>
              {project.description}
            </Text>
            <Text fontSize="sm" color="gray.500" mt={2}>
              Tech Stack: {project.techStack}
            </Text>
            <HStack mt={4}>
              <Button
                colorScheme="blue"
                as="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Spacer />
              <Button
                colorScheme="green"
                as="a"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Button>
            </HStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectSlider;
