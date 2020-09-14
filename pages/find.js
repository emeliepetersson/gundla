import { fetchEntries } from "../pages/api/Contentful";
import styled from "styled-components";
import Hero from "../components/Hero";
import Post from "../components/Post";
import colors from "../config/colors";
import ContactInfo from "../components/ContactInfo";
import Map from "../components/Map";




function Find({find,contactInfo}) {
    console.log(contactInfo.adress)
    return (

        <Container>
          <Hero
             imageUrl={find.hero.fields.file.url}
           />
           <Post 
                title={find.title}
                text={find.text}
           />
            <ContactContainer>
                <ContactInfo

                    adress={contactInfo.adress}
                    postcode={contactInfo.postcode}
                    openingHours={contactInfo.openingHours}
                />
                <Map />
            </ContactContainer>
            <Post className="travel"
                title={find.titleTravel}
                text={find.textTravel}
                buttonText={"Till Västtrafik"}
            />
          
            <Post
                title={find.titleCar}
                text={find.textCar}
            />
         
            <Post 
                imageUrl={find.imageAccess.fields.file.url}
                altText={find.imageAccess.fields.description}
                title={find.titleAccess}
                text={find.textAccess}
                buttonText={"Till Västtrafik"}
            />
            <Post className="animal"
                title={find.titleAnimal}
                text={find.textAnimal}
                
            />
        </Container>

    )
}

export default Find

export const getStaticProps = async () => {
    const contactInfoRes = await fetchEntries("visitingInfo");
    const contactInfoResponse = await contactInfoRes.map((i) => {
        return i.fields;
    });
    const contactInfo = contactInfoResponse[0];

    const findRes = await fetchEntries("hittaOss");
    const findResponse = await findRes.map((i) => {
        return i.fields;
    });

    const find = findResponse[0];

    return {
        props: {
            contactInfo,
            find,
        },
    };
};


const Container = styled.div`
    background:white;
    img:nth-child(1){
        z-index:0;
    }
    .travel{
        background:${colors.lightGrey};
        padding-top:64px;
        padding-bottom:75px;
    }
    .animal{
        background:${colors.lightGrey};
    }
`;
const ContactContainer = styled.div`
    background:${colors.lightGrey};
    div:nth-child(1){
        padding-top:70px;
        padding-bottom:90px;
    }
`;