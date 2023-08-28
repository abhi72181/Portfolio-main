import React from 'react';
// import Header from './components/Header';
import Simple from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import { ChakraProvider } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
const App = () => {
  return (
    <div >
      <ChakraProvider>
      <Simple />
      <Divider />
     <About/>
     <Divider />
     <Skills/>
     <Divider />
     <Education/>
     <Divider />
     <Project/>
     <Divider />
     <Contact  />
     <Divider />
   </ChakraProvider>

    </div>
  );
};

export default App;
