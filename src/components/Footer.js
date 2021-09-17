import styled from "styled-components";

import iconFB from "../images/icon-fb.svg";
import iconVK from "../images/icon-vk.svg";
import iconInst from "../images/icon-inst.svg";

import bannerGP from "../images/baner-googleplay.svg";
import bannerAS from "../images/baner-appstore.svg";

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <ProjectName>React</ProjectName>
        <Social>
          <SocialTitle>Присоединяйтесь к нам</SocialTitle>
          <SocialLinks>
            <FaceBook href="">
              <FaceBookIcon src={iconFB} alt="Facebook" />
            </FaceBook>
            <VKontakte href="">
              <VKontakteIcon src={iconVK} alt="ВКотнакте" />
            </VKontakte>
            <Instagram href="">
              <InstagramIcon src={iconInst} alt="Instagram" />
            </Instagram>
          </SocialLinks>
        </Social>
        <Applications>
          <ApplicationsTitle>Устанавливайте приложение</ApplicationsTitle>
          <ApplicationsLinks>
            <GooglePlay href="">
              <GooglePlayIcon src={bannerGP} alt="Google Play" />
            </GooglePlay>
            <AppStore href="">
              <AppStoreIcon src={bannerAS} alt="App Store" />
            </AppStore>
          </ApplicationsLinks>
        </Applications>
      </Wrapper>

      <Info>
        <Copyright>© Sionic</Copyright>
        <LegalInfo>Правовая информация</LegalInfo>
        <PrivacyPolicy>Политика конфиденциальности</PrivacyPolicy>
      </Info>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  margin: 0;
  padding: 32px 0 35px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 132px 0 50px;
`;

const ProjectName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 41px;
  line-height: 50px;
  font-weight: 700;
  color: #2d2d2f;
  margin: 0 627px 0 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 122%;
  font-weight: 400;
  color: #8d8d8e;
  margin: 61px auto 0;
`;

const Copyright = styled.p`
  margin: 0;
`;

const LegalInfo = styled.a`
  display: block;
  margin: 0 20px;
`;

const PrivacyPolicy = styled.a`
  display: block;
  margin: 0;
`;

const Social = styled.div`
  margin: 0 31px 0 0;
`;

const SocialTitle = styled.h3`
  display: block;
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  color: #2d2d2f;
  margin: 10px 0;
`;

const SocialLinks = styled.nav`
  margin: 0;
`;

const FaceBook = styled.a`
  width: 28px;
  height: 28px;
  margin: 0 16px 0 0;
`;

const FaceBookIcon = styled.img`
  margin: 0;
`;

const VKontakte = styled(FaceBook)``;

const VKontakteIcon = styled(FaceBookIcon)``;

const Instagram = styled(FaceBook)``;

const InstagramIcon = styled(FaceBookIcon)``;

const Applications = styled(Social)`
  margin: 0;
`;

const ApplicationsTitle = styled(SocialTitle)``;

const ApplicationsLinks = styled(SocialLinks)`
  margin: 0;
`;

const GooglePlay = styled.a`
  width: 104px;
  height: 32px;
  margin: 0 20px 0 0;
`;

const GooglePlayIcon = styled.img`
  margin: 0;
`;

const AppStore = styled(GooglePlay)`
  margin: 0;
`;

const AppStoreIcon = styled(GooglePlayIcon)``;
