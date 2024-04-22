import styled from "styled-components";
import React, { useState } from "react";

const Line = styled.div`
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
`;

const StyledHero = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  place-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.background};

  &::before {
    position: absolute;
    top: 0;
    left: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);

    /* ${Line}:nth-child(5) {
      left: calc(100% / 7 * 2);
      background-color: rgba(255, 255, 255, 0.24);

      &:before {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 3px solid white;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    } */
  }
`;

const Content = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: start;
  position: relative;
  z-index: 10;
  font-family: "Montserrat", sans-serif;
  /* padding-top: 8rem; */

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 56vh;
  }

  h1 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-align: start;
    letter-spacing: 0.25rem;

    &:nth-child(2) {
      margin-bottom: 1rem;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      font-size: 2.8rem;
      text-align: center;
    }
    ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 3.8rem;
    }
    ${({ theme }) => theme.breakpoints.laptop} {
      font-size: 4.2rem;
    }
    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 4.8rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 800;
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;

    &:nth-child(2) {
      margin-bottom: 1rem;
    }

    ${({ theme }) => theme.breakpoints.phone} {
      font-size: 1.4rem;
    }
    ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 1.6rem;
    }
    ${({ theme }) => theme.breakpoints.laptop} {
      font-size: 2.2rem;
    }
    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 2.6rem;
    }
  }

  p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 2.8rem;
    opacity: 0.84;

    ${({ theme }) => theme.breakpoints.phone} {
      font-size: 0.9rem;
    }
    ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 1rem;
    }
    ${({ theme }) => theme.breakpoints.laptop} {
      font-size: 1.4rem;
    }
    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 1.6rem;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100vh;
  width: min(80%, 128rem);
  margin: 0 auto;
  align-content: center;
`;

const LargeCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 200px solid white;
  background-color: ${({ theme }) => theme.colors.background};
  right: 100%; /* Center horizontally */
  top: 100%; /* Center vertically */
  transform: translate(50%, -50%); /* Adjust for centering */

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 300px;
    height: 300px;
    right: calc(100%); /* Adjust as needed */
    top: calc(5%); /* Adjust as needed */
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 100px solid white;
  background-color: ${({ theme }) => theme.colors.background};
  right: 100%; /* Center horizontally */
  top: 100%; /* Center vertically */
  transform: translate(50%, -50%); /* Adjust for centering */

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 150px;
    height: 150px;
    right: calc(25%); /* Adjust as needed */
    top: calc(75%); /* Adjust as needed */
  }
`;

const FloatingActionButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above other elements */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FloatingMenu = styled.li`
  position: fixed;
  top: 35%;
  right: 75%;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above other elements */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
`;

const PopupFormContainer = styled.div`
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  transition: transform 0.5s ease-in-out;
`;

// Define styles for the form fields
const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }
`;

export function Hero({ heroRef }) {
  // State to track if the form is open or closed
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted!");
  };

  return (
    <StyledHero id="home" ref={heroRef}>
      <ContentContainer>
        <Content>
          <h2>Web Design</h2>
          <h2>Graphic Design</h2>
          <h2>Digital Marketing</h2>
          <h2>Mobile App Development</h2>
          <p>
            Unleash Creativity with Conceptual Designs: From Vision to Reality
          </p>
        </Content>
      </ContentContainer>
      <LargeCircle />
      <FloatingActionButton onClick={() => setIsFormOpen(true)}>
        Get Started
      </FloatingActionButton>
      <FloatingMenu>
        <p>Home</p>
        <p>Projects</p>
        <p>Tech Stack</p>
        <p>Contact</p>
      </FloatingMenu>
      <Circle />
      {isFormOpen && (
        <>
          <PopupOverlay />
          <PopupFormContainer>
            <Content>
              <h2>Start a Project with Conceptual Designs</h2>
            </Content>
            <button onClick={() => setIsFormOpen(false)}>X</button>
            <form color="#000000" onSubmit={handleSubmit}>
              <FormField>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" required />
              </FormField>
              <FormField>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </FormField>
              <FormField>
                <label htmlFor="budget">
                  Tell us about your project budget
                </label>
                <select id="budget" required>
                  <option value="">Select</option>
                  <option value="0-1000">$0 - $1000</option>
                  <option value="1000-5000">$1000 - $5000</option>
                  <option value="5000-10000">$5000 - $10000</option>
                </select>
              </FormField>
              <FormField>
                <label htmlFor="services">Select services needed</label>
                <select id="services" multiple required>
                  <option value="webDesign">Web Design</option>
                  <option value="graphicDesign">Graphic Design</option>
                  <option value="digitalMarketing">Digital Marketing</option>
                  <option value="mobileAppDevelopment">
                    Mobile App Development
                  </option>
                </select>
              </FormField>
              <button type="submit">Submit</button>
            </form>
          </PopupFormContainer>
        </>
      )}
    </StyledHero>
  );
}
