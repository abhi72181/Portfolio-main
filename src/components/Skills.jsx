

import React from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Image,
  useBreakpointValue,
  Center
} from '@chakra-ui/react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Nodejs',
        'HTML',
        'CSS',
        'ChakraUI',
        'ResponsiveDesign',
      ];
  const columnCount = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Box id="skills" h="100vh" mt={8} w="100%">
        <Center>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Skills
        </Text>
      </Center>
      <SimpleGrid       p={4} columns={columnCount} spacing={4}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            borderRadius="md"
            border="1px"
            borderColor="gray.200"
            p={4}
            boxShadow="md"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src={`./${skill.toLowerCase()}.png`} // Replace with your image paths
              alt={`${skill} Logo`}
              boxSize="80px"
              objectFit="contain"
              mb={2}
            />
            <Text fontSize="lg" textAlign="center">
              {skill}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;


