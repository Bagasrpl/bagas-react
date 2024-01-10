import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


function App() {
  const [darkMode] = useState(true);
  const [openModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
        
            <Skills />
      
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
