import styled from "styled-components";

import React from "react";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <Signup>Disney+ Hotstar Clone</Signup>
          <Description>
            Disney+ Hotstar is an online video streaming platform owned by Novi
            Digital Entertainment Private Limited, a wholly owned subsidiary of
            Star India Private Limited. Disney+ Hotstar currently offers over
            100,000 hours of TV content and movies across 9 languages, and every
            major sport covered live.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background-image: url("../images/login-background.jpg");
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transiton: opacity 0.3s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 8px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 0.8);
  font-size: 12px;
  margin: 0 0 24px;
  line-height:1.5em;
  letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
  max-width:600px;
  margin-bottom:20px;
  transition:20px;
  display: inline-block;
  vertical-align: bottom;
  width:100%;
`;

export default Login;
