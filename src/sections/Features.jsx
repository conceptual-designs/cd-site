import styled from "styled-components";

// Images
import feature from "@assets/images/feature.png";

const StyledFeatures = styled.section`
  padding-bottom: 16rem;
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
  background-color: ${({ theme }) => theme.colors.primary};
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

const FeaturesContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const FeatureImage = styled.img`
  height: auto;
  width: 28rem;
  margin-top: 0.8rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 40rem;
  }

  ${({ theme }) => theme.breakpoints.laptop} {
    width: 48rem;
  }
`;

const LeftFeatures = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-right: ${({ theme }) => theme.spacing.xl};
`;

const RightFeatures = styled(LeftFeatures)`
  margin-left: ${({ theme }) => theme.spacing.xl};
`;

const Feature = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FeatureNumber = styled.p`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-content: center;
`;

const FeatureTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.24;
`;

export function Features() {
  return (
    <StyledFeatures id="features">
      <HeadingContainer>
        <Heading>Features</Heading>
        <Hr />
        <Subheading>Empowerment at Your Fingertips</Subheading>
        <SectionDescription>
          Experience a suite of features that liberate hospital staff from
          manual tracking and guesswork, enabling them to monitor their
          radiation exposure in real-time and focus on their core duties.
        </SectionDescription>
      </HeadingContainer>

      <FeaturesContainer>
        <LeftFeatures>
          <Feature>
            <FeatureNumber>1</FeatureNumber>
            <FeatureTitle>Efficient Dosimeter Tracking</FeatureTitle>
            <FeatureDescription>
              Seamlessly track your dosimeter readings to maintain a clear and
              accurate record of your radiation exposure.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>2</FeatureNumber>
            <FeatureTitle>Distance Evaluation</FeatureTitle>
            <FeatureDescription>
              Assess the distance from radiation sources in real-time to ensure
              a safe working environment.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>3</FeatureNumber>
            <FeatureTitle>Time Tracker</FeatureTitle>
            <FeatureDescription>
              Keep track of the duration of exposure to radiation, assisting you
              in managing and reducing your time spent in high-radiation areas.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>4</FeatureNumber>
            <FeatureTitle>Shielding Assessment</FeatureTitle>
            <FeatureDescription>
              Evaluate the effectiveness of your shielding tools, helping to
              ensure optimal radiation protection.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>5</FeatureNumber>
            <FeatureTitle>Technique Analyzer</FeatureTitle>
            <FeatureDescription>
              Review and assess the techniques employed in radiation-prone
              procedures to ensure the best safety practices are adhered to.
            </FeatureDescription>
          </Feature>
        </LeftFeatures>
        <FeatureImage src={feature} alt="feature" />
        <RightFeatures>
          <Feature>
            <FeatureNumber>6</FeatureNumber>
            <FeatureTitle>Real-time Safety Scoring</FeatureTitle>
            <FeatureDescription>
              Receive immediate scores based on your responses, giving an
              instant evaluation of your safety situation at a specific point in
              time.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>7</FeatureNumber>
            <FeatureTitle>Historical Safety Data</FeatureTitle>
            <FeatureDescription>
              Access your past safety scores and monitor your progress over
              time, helping to identify patterns and areas for improvement, with
              reports and graphs.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>8</FeatureNumber>
            <FeatureTitle>Safety Recommendations</FeatureTitle>
            <FeatureDescription>
              Based on your score and answers, draw conclusions to personalized
              recommendations for enhancing your safety practices.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>9</FeatureNumber>
            <FeatureTitle>User-friendly Interface</FeatureTitle>
            <FeatureDescription>
              With a simple, intuitive design, answer questions and navigate
              through the app with ease.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureNumber>10</FeatureNumber>
            <FeatureTitle>Collaborative Learning</FeatureTitle>
            <FeatureDescription>
              Share your scores and experiences with peers, promoting a culture
              of shared learning and safety.
            </FeatureDescription>
          </Feature>
        </RightFeatures>
      </FeaturesContainer>
    </StyledFeatures>
  );
}
