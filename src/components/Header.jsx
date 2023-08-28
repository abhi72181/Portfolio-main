

import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const Links = [ 'About', 'Skills', 'Education', 'Projects', 'Contact'];

const NavLink = (props) => {
  const { children, sectionId } = props;

  return (
    <ScrollLink
      to={sectionId}
      smooth={true}
      offset={-90} // Adjust the offset if needed
      duration={500} // Duration of the scroll animation
    >
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
      >
        {children}
      </Box>
    </ScrollLink>
  );
};

function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        position="fixed"
        width="100%"
        zIndex={100}
        px={4}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
          <Image
          src="aman.jpg"
          alt="Your Name"
          borderRadius="full"
          boxSize="50px"
          objectFit="cover"
          mx="auto"
        />
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} sectionId={link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </HStack>
            
              
            
            <Flex alignItems="center">
              {/* ... Rest of the profile menu ... */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      './aman.jpg'
                    }
                  />
                </MenuButton>
                {/* Rest of the profile menu items */}
              </Menu>
            </Flex>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} sectionId={link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Simple;

