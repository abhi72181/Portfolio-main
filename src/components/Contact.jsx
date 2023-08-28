import React from 'react';
import { Box, Flex, Text, Link, Icon, useBreakpointValue,Button } from '@chakra-ui/react';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';


const Contact = () => {
  const isSmallerScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="contact" h="100vh" textAlign="center" mb={8} mt={isSmallerScreen ? 4 : 8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Contact
      </Text>
      <Flex
        p={8}
        flexDirection={isSmallerScreen ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
      >

        {/* Email */}
        <Box
          mb={isSmallerScreen ? 4 : 0}
          mr={isSmallerScreen ? 0 : 8}
          textAlign={isSmallerScreen ? 'center' : 'left'}
        >
          <Icon as={FiMail} boxSize={6} color="blue.500" mb={2} />
          <Link href="mailto:abhihits0404@gmail.com" color="gray.700">
          abhihits0404@gmail.com
          </Link>
        </Box>

        {/* LinkedIn */}
        <Box
          mb={isSmallerScreen ? 4 : 0}
          mr={isSmallerScreen ? 0 : 8}
          textAlign={isSmallerScreen ? 'center' : 'left'}
        >
          <Icon as={FiLinkedin} boxSize={6} color="blue.500" mb={2} />
          <Link
            href="https://www.linkedin.com/in/abhishek-rishikant-pandey/"
            target="_blank"
            rel="noopener noreferrer"
            color="gray.700"
          >
            LinkedIn Profile
          </Link>
        </Box>

        {/* GitHub */}
        <Box
          mb={isSmallerScreen ? 4 : 0}
          mr={isSmallerScreen ? 0 : 8}
          textAlign={isSmallerScreen ? 'center' : 'left'}
        >
          <Icon as={FiGithub} boxSize={6} color="blue.500" mb={2} />
          <Link
            href="https://github.com/abhi72181"
            target="_blank"
            rel="noopener noreferrer"
            color="gray.700"
          >
            GitHub Profile
          </Link>
        </Box>

        {/* Mobile Number */}
        <Box
          mb={isSmallerScreen ? 4 : 0}
          mr={isSmallerScreen ? 0 : 8}
          textAlign={isSmallerScreen ? 'center' : 'left'}
        >
          <Icon as={FiPhone} boxSize={6} color="blue.500" mb={2} />
          <Text display="inline-block" color="gray.700">
            Mobile: +1234567890
          </Text>
        </Box>
        <Box
          mb={isSmallerScreen ? 4 : 0}
          mr={isSmallerScreen ? 0 : 8}
          textAlign={isSmallerScreen ? 'center' : 'left'}
        >
          <Button
            colorScheme="blue"
            onClick={() => window.open('https://drive.google.com/file/d/1mdw6USciPh-W2ytocJO76vLAjlX8bkRa/view?usp=drivesdk', '_blank')} // Replace with the actual path to your resume PDF
          >
            View/Download Resume
          </Button>
        </Box>
      </Flex>
    
    </Box>
  );
};

export default Contact;
