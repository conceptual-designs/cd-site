import styled from 'styled-components';

// Images
import about from '@assets/images/about.png';

// Icons
import { Clock, Shield, Trending, User, Users } from '@icons';

const StyledHow = styled.section`
  margin-top: 48vh;
  position: relative;
  padding-bottom: 16rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 30vh;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const LargeCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 50px solid ${({ theme }) => theme.colors.primary};
  opacity: 0.12;
  transform: translateX(-50%) translateY(-8%);
  position: absolute;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 400px;
    height: 400px;
    border: 120px solid ${({ theme }) => theme.colors.primary};
  }
`;

const HeadingContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  text-align: center;
  margin-top: 20rem;
  margin-bottom: 12rem;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 4.8rem;
  }
  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 6rem;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 6.8rem;
  }
`;

const Hr = styled.hr`
  width: 10rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin: 0 auto;
`;

const Subheading = styled.h3`
  font-size: 2.4rem;
`;

const SectionDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.light};

  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.8rem;
  }
`;

const Features = styled.div`
  margin-top: 8rem;
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureImage = styled.img`
  height: 60rem;

  ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: 2rem;
    height: 68rem;
  }
`;

const FeatureDetails = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 92%;
`;

const FeaturesHeading = styled.h2`
  font-size: 3.2rem;
`;

const Feature = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconContainer = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  place-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  svg {
    stroke: #ffffff;
  }
`;

const FeatureHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.24;
`;

export function How() {
  return (
    <StyledHow id="how">
      <BadgeContainer></BadgeContainer>
      <LargeCircle />
      <HeadingContainer>
        <Heading>How Does It Work?</Heading>
        <Hr />
        <Subheading>Radiation Safety, Reinvented</Subheading>
        <SectionDescription>
          Discover how we're revolutionizing radiation safety for hospital staff, freeing healthcare
          professionals from uncertainties about their radiation exposure, so they can concentrate
          on delivering excellent patient care.
        </SectionDescription>
      </HeadingContainer>
      <Features>
        <FeatureImage src={about} alt="feature" />
        <FeatureDetails>
          <FeaturesHeading>Real Time Safety Stats</FeaturesHeading>
          <Feature>
            <IconContainer>
              <Clock />
            </IconContainer>
            <FeatureHeading>Real-time Radiation Monitoring:</FeatureHeading>
            <FeatureText>
              Tracking of real-time or monthly dosimeter readings, as well as time, distance,
              shielding and general technique data by means of questionnaires.
            </FeatureText>
          </Feature>
          <Feature>
            <IconContainer>
              <Shield />
            </IconContainer>
            <FeatureHeading>Safety Culture Development:</FeatureHeading>
            <FeatureText>
              Foster a safety-first mindset with updated knowledge, best practices, and team
              communication.
            </FeatureText>
          </Feature>
          <Feature>
            <IconContainer>
              <Trending />
            </IconContainer>
            <FeatureHeading>Progress Meter:</FeatureHeading>
            <FeatureText>
              Track your radiation safety culture by the progress meter measured by 5 questionnaires
              (Dosimeter, Distance Time, Shielding and Technique).
            </FeatureText>
          </Feature>
          <Feature>
            <IconContainer>
              <User />
            </IconContainer>
            <FeatureHeading>User-Friendly Design:</FeatureHeading>
            <FeatureText>
              Experience an intuitive, easy-to-use interface, integrating safety monitoring into
              daily routines.
            </FeatureText>
          </Feature>
          <Feature>
            <IconContainer>
              <Users />
            </IconContainer>
            <FeatureHeading>Management Tools:</FeatureHeading>
            <FeatureText>
              Aid management with analytics for trend identification and implementing preventive
              measures.
            </FeatureText>
          </Feature>
        </FeatureDetails>
      </Features>
    </StyledHow>
  );
}
