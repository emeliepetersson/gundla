import styled from "styled-components";
import { fetchEntries } from "../pages/api/Contentful";

import colors from "../config/colors";

import Hero from "../components/Hero";
import Post from "../components/Post";
import Carousel from "../components/Carousel";
import ContactForm  from '../components/ContactForm';
import ContactInfo from "../components/ContactInfo";
import Map from "../components/Map";


function Contact({contactPage, contactInfo}) {

  const images = ['/images/hero-test-portrait.jpg', '/images/jos4.jpg','/images/hero-test.jpg',];

    return (
        <Container>
          <Hero
            imageUrl={contactPage.hero.fields.file.url}
          />
          <div className="contact-hero-text-container">
            <Post
              title={contactPage.title1}
              text={contactPage.text1}
            />
          </div>
          <ContactForm/>
          <h2>{contactPage.title2}</h2>
          <ContactInfo
            adress={contactInfo.adress}
            postcode={contactInfo.postcode}
          />
          <Map/>
          {/* <Carousel images={images} /> */}
        </Container>
    );
  };

  export default Contact;
  
  export const getStaticProps = async () => {

    const contactInfoRes = await fetchEntries("visitingInfo");
    const contactInfoResponse = await contactInfoRes.map((i) => {
      return i.fields;
    });

    const contactInfo = contactInfoResponse[0];
    
    const contactPageRes = await fetchEntries("contactpage");
    const contactPageResponse = await contactPageRes.map((i) => {
      return i.fields;
    });
  
    const contactPage = contactPageResponse[0];
  
    return {
      props: {
        contactInfo,
        contactPage,
      },
    };
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contact-hero-text-container {
      min-height: 50vh;
    }

    h2 {
      margin-top: 64px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: ${colors.black};
    }
  `;