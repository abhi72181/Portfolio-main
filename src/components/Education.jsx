import React from 'react';
import {
  Box,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdSchool } from 'react-icons/md';

const Education = () => {
    const education = [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University of Example',
          date: '2018 - 2022',
          honors: 'Dean\'s List',
        },
        // Add more education items
      ];
      
      // Inside your main component:
      
      
  const isSmallerScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="education" h="100vh"  mt={8} w="100%" textAlign="center">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Education
      </Text>
      <VStack spacing={isSmallerScreen ? 4 : 8}>
        {education.map((item, index) => (
          <Box key={index} w="100%">
            <Text fontSize="lg" fontWeight="semibold">
              {item.degree}
            </Text>
            <Text fontSize="md" color="gray.500">
              {item.institution}
            </Text>
            <Text fontSize="md" color="gray.500">
              {item.date}
            </Text>
          </Box>
        ))}
      </VStack>
      <Divider my={6} />
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Honors & Achievements
      </Text>
      <List spacing={2}>
        {education.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={MdSchool} color="blue.500" />
            {item.honors}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Education;
