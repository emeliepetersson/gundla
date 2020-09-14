import styled from "styled-components";
import PropTypes from "prop-types";
import ContactInfo from "../components/ContactInfo";
import SocialMedia from "../components/SocialMedia";
import colors from "../config/colors";


const Footer =({footerData})=>{
  return(
    <Container>
        <h2>Gundla Gårdscafé</h2>
        <ContactInfo
          adress={footerData.adress}
          postcode={footerData.postcode}
          openingHours={footerData.openingHours}
          email={footerData.email}
          phonenumber ={footerData.phoneNumber}
        />
        <SocialMedia className="footer-icon-container"
          icons={[
            { url: "/icons/instagram-white.png", altText: "Instagram icon" },
            { url: "/icons/facebook-white.png", altText: "Facebook icon" },
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
*{
  color: ${colors.white};
}
background-color: #0a0a0a;
padding-top: 96px;
padding-bottom: 176px;

h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
}

h3 {
  margin-top: 32px;
}

.footer-icon-container {
  margin-top: 40px;
}
`;