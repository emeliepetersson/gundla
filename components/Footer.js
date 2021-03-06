import styled from "styled-components";
import PropTypes from "prop-types";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import colors from "../config/colors";
import device from "../config/device";

const Footer = ({ footerData }) => {
  return (
    <Container>
      <img
        tabIndex="0"
        className="logo"
        src="./icons/logo.png"
        alt="Gundla's logotype, an black outlined sunflower in a white circle."
      />
      <h2 tabIndex="0">Gundla Gårdscafé</h2>
      <ContactInfo
        className="contact-info"
        adress={footerData.adress}
        postcode={footerData.postcode}
        openingHours={footerData.openingHours}
        email={footerData.email}
        phonenumber={footerData.phoneNumber}
      />
      <SocialMedia
        className="footer-icon-container"
        icons={[
          {
            url: "/icons/instagram-white.png",
            altText: "Instagram icon",
            link: "https://www.instagram.com/gundlagardscafe/",
          },
          {
            url: "/icons/facebook-white.png",
            altText: "Facebook icon",
            link: "https://www.facebook.com/gundlagardscafe",
          },
        ]}
      />
    </Container>
  );
};

Footer.propTypes = {
  footerData: PropTypes.object,
};

export default Footer;

const Container = styled.footer`
  color: ${colors.white};
  background-color: ${colors.blackBackground};
  padding-top: 60px;
  padding-bottom: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 80px;
    height: 80px;
    margin-bottom: 45px;
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  .opening-hours {
    padding-top: 34px;
  }

  .contact {
    margin-top: 30px;
  }

  .footer-icon-container {
    padding: 30px 0 0;

    img {
      margin-top: 0;
    }
  }

  @media ${device.laptop} {
    position: relative;
    padding-bottom: 164px;
    padding-top: 109px;

    .contact-info {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 46px 50px;

      .contact,
      .opening-hours {
        margin: 0;
        padding: 0%;
      }

      .opening-hours {
        order: 1;
      }

      .adress {
        order: 2;
      }

      .contact {
        order: 3;
      }

      .opening-hours,
      .adress,
      .contact {
        width: 30%;
      }
    }

    .footer-icon-container {
      position: absolute;
      bottom: 170px;
    }
  }
`;
