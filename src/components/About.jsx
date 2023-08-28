import React from 'react';
import { Box, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';

const About = () => {
  const isSmallerScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      p={8}
      flexDirection={isSmallerScreen ? 'column' : 'row'}
      alignItems="center"
      mt="16"
      h="100vh"
    >
      {/* Image */}
      <Box id="about"
        w={isSmallerScreen ? '100%' : '40%'}
        mb={isSmallerScreen ? 4 : 0}
        order={isSmallerScreen ? -1 : 0}
        
      >
        <Image
          src="aman.jpg"
          alt="Your Name"
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          mx="auto"
        />
      </Box>

      {/* Description */}
      <Box
        w={isSmallerScreen ? '100%' : '60%'}
        ml={isSmallerScreen ? 0 : 8}
        textAlign={isSmallerScreen ? 'center' : 'left'}
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          About Me
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime quasi nulla. Similique praesentium excepturi voluptates in odit numquam sapiente ut consequuntur nulla ex. Ratione nemo obcaecati necessitatibus ab consectetur.
          Ducimus aspernatur sapiente adipisci id, praesentium quia ut quam corporis amet architecto beatae assumenda reprehenderit, culpa unde quibusdam veritatis voluptate obcaecati. Assumenda, perferendis quasi. Perspiciatis cumque nemo consequatur consectetur deleniti?
          Fugit natus, assumenda aspernatur nulla amet placeat molestias dicta eum magnam unde beatae incidunt explicabo aperiam qui nostrum temporibus culpa eligendi exercitationem dignissimos eos alias commodi enim! Eaque, recusandae temporibus?
          Cupiditate praesentium vitae eligendi dolorum rem impedit officia veniam? Fuga porro quia voluptatum, veniam quod nostrum, deserunt unde, tempora commodi voluptatibus natus ullam suscipit reiciendis aperiam illum cum odio architecto?
          Velit, perferendis impedit debitis provident voluptatem atque mollitia, et voluptate laborum blanditiis, tenetur odio sit maiores! Nulla dolorem soluta tempora veritatis. Ex repellendus consectetur incidunt explicabo perspiciatis nostrum deserunt molestias?
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
