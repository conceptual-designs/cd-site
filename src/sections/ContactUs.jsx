import styled from "styled-components";

// Icons
import { Email, Mobile, Location } from "@icons";

// Components
import { Input } from "@components/Input";
import { TextArea } from "@components/TextArea";

const StyledContactUs = styled.section`
  position: relative;
  padding-bottom: 16rem;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const LargeCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 50px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 50%;
  top: 150px;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 400px;
    height: 400px;
    border: 120px solid ${({ theme }) => theme.colors.primary};
    right: 50%;
  }
`;

const HeadingContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 12rem;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Heading = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.6rem;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 3.4rem;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 3.8rem;
  }
`;

const Hr = styled.hr`
  width: 10rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Details = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function ContactUs() {
  return (
    <StyledContactUs id="contact">
      <LargeCircle />
      <HeadingContainer>
        <Heading>Contact Us</Heading>
        <Hr />
      </HeadingContainer>
      <ContactContainer>
        <Details>
          <DetailsContainer>
            <Email />
            <p>info@conceptualdesigns.co.za</p>
          </DetailsContainer>
          <DetailsContainer>
            <Mobile />
            <p>+27 63 215 2281</p>
          </DetailsContainer>
          <DetailsContainer>
            <Location />
            <p>9 James Scott Street, Thaba Nchu, South Africa</p>
          </DetailsContainer>
        </Details>
      </ContactContainer>
    </StyledContactUs>
  );
}
