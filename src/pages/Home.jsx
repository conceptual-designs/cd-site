import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Components
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

// Section
import { Hero } from "@sections/Hero";
// import { How } from "@sections/How";
import { ContactUs } from "@sections/ContactUs";

const StyledHome = styled.div``;

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(heroRef.current);
  }, []);

  return (
    <StyledHome>
      <Navbar isScrolled={isScrolled} />
      <Hero heroRef={heroRef} />
      <ContactUs />
      <Footer />
    </StyledHome>
  );
}
