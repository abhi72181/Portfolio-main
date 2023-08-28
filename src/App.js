import React from 'react';
// import Header from './components/Header';
import Simple from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import { ChakraProvider } from '@chakra-ui/react';
import { Divider , Spacer} from '@chakra-ui/react'
const App = () => {
  return (
    <div >
      <ChakraProvider>
      <Simple />
      <Spacer height={8} />
     <About/>
     <Spacer height={500} />
     <Skills/>
     <Spacer height={700} />
     <Education/>
     <Spacer height={8} />
     <Project/>
     <Spacer height={8} />
     <Contact  />
     <Spacer height={8} />
   </ChakraProvider>

    </div>
  );
};

export default App;
