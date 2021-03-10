import React from "react";
import myCV from "../jiashin-cv.pdf";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import about from "../img/about.png";
import Layout from "../components/layout/Layout";

const GlobalStyle = createGlobalStyle`

  body {
    background: url(${about}) fixed center no-repeat;
    background-size: cover;
    color:#fff;
 
    
  }
`;

const StyledDiv = styled.div`
  display: grid;
  font-family: Poppins;
  place-items: center;
  height: 60vh;
  a {
    font-family: Montserrat;
  }
`;

const variants = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1
    }
  },
  out: {
    y: 50,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  }
};

const AboutMe = () => {
  return (
    <motion.div variants={variants} initial="out" animate="in" out="out">
      <Layout>
        <GlobalStyle />{" "}
        <StyledDiv>
          <div className="container text-center">
            <h1> Hello World! </h1> <h3>I am Shin.</h3>
            <a href={myCV} download="jiashin-cv.pdf">
              <Button variant="info text-white"> My Resume </Button>
            </a>
          </div>{" "}
        </StyledDiv>
      </Layout>{" "}
    </motion.div>
  );
};

export default AboutMe;
