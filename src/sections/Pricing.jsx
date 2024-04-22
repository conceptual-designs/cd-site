import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPricing = styled.section`
  padding-bottom: 16rem;
`;

const HeadingContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const FreeTrail = styled.p`
  display: inline-block;
  width: max-content;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.light};

  ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.8rem;
  }

  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
`;

const MonthlySelector = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const SelectorContainer = styled.div`
  height: 3rem;
  width: 6rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Selector = styled.div`
  height: 2.52rem;
  width: 2.56rem;
  border-radius: 50%;
  background-color: ${({ theme, $isMonthly }) => (!$isMonthly ? theme.colors.primary : 'white')};
  cursor: pointer;
  padding-bottom: 2px;
  transition: ${({ theme }) => theme.transitions.easeInOutCubicBezier};

  ${({ $isMonthly }) => !$isMonthly && 'transform: translateX(2.8rem);'}
`;

const Monthly = styled.p``;

const Yearly = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::after {
    content: 'Save 20%';
    font-size: 1.2rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10rem;
    padding: 0.4rem 0.8rem;
  }
`;

const PriceContainer = styled.div`
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme, $popular }) => ($popular ? theme.colors.primary : 'white')};
  padding: ${({ theme }) => theme.padding.xxl};
  max-width: 32rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme, $popular }) => ($popular ? 'white' : theme.colors.dark)};
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
`;

const MostPopular = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.padding.sm} ${({ theme }) => theme.padding.md};
  border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  padding: 1.6rem 2rem;
`;

const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.md};
`;

const Price = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
`;

const Feature = styled.p`
  color: ${({ theme, $popular }) => ($popular ? 'white' : theme.colors.light)};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
  margin-top: ${({ theme }) => theme.spacing.xl};
  border: none;
  background-color: ${({ theme, $popular }) =>
    $popular ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1.48rem;
  transition: ${({ theme }) => theme.transitions.easeInOut};

  &:hover {
    background-color: ${({ theme, $popular }) =>
      $popular ? theme.colors.secondaryDark : theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <StyledPricing id="pricing">
      <HeadingContainer>
        <Heading>Pricing</Heading>
        <Hr />
        <Subheading>Your Budget, Our Priority</Subheading>
        <SectionDescription>
          With our flexible pricing options, we eliminate the financial barriers that slow down your
          safety measures, making cutting-edge radiation safety accessible for every budget so you
          can prioritize staff wellbeing.
        </SectionDescription>
        <FreeTrail>
          Get started with a free, no obligation 60 day trail, <strong>*</strong>no credit required!
        </FreeTrail>
      </HeadingContainer>
      <MonthlySelector>
        <Monthly>Monthly</Monthly>
        <SelectorContainer>
          <Selector $isMonthly={isMonthly} onClick={() => setIsMonthly(!isMonthly)} />
        </SelectorContainer>
        <Yearly>Yearly</Yearly>
      </MonthlySelector>
      <PriceContainer>
        <Card>
          <h3>Lite Protection</h3>
          <Price>{isMonthly ? '$10 / PM*' : '$100 / PY*'}</Price>
          <Feature>Suitable for small practice</Feature>
          <Feature>Includes all app features</Feature>
          <Feature>License valid for 1 year</Feature>
          <Feature>Rewards program</Feature>
          <Feature>Stats history 1 years</Feature>
          <StyledLink to={`/register/${isMonthly}/lite`}>60 Day Free Trail</StyledLink>
        </Card>
        <Card $popular={true}>
          <MostPopular>Most Popular</MostPopular>
          <Spacer />
          <h3>Medium Protection</h3>
          <Price>{isMonthly ? '$29 / PM*' : '$290 / PY*'}</Price>
          <Feature $popular={true}>Register up to 6 sites</Feature>
          <Feature $popular={true}>Includes all app features</Feature>
          <Feature $popular={true}>License valid for 1 year</Feature>
          <Feature $popular={true}>Rewards program</Feature>
          <Feature $popular={true}>Stats history 2 years</Feature>
          <StyledLink to={`/register/${isMonthly}/medium`} $popular={true}>
            60 Day Free Trail
          </StyledLink>
        </Card>
        <Card>
          <h3>Heavy Protection</h3>
          <Price>{isMonthly ? '$240 / PM*' : '$2400 / PY*'}</Price>
          <Feature>Register up to 40 sites</Feature>
          <Feature>Includes all app features</Feature>
          <Feature>License valid for 1 year</Feature>
          <Feature>Rewards program</Feature>
          <Feature>Stats history 4 years</Feature>
          <StyledLink to={`/register/${isMonthly}/heavy`}>60 Day Free Trail</StyledLink>
        </Card>
      </PriceContainer>
    </StyledPricing>
  );
}
