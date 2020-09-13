import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import { fetchEntries } from "../pages/api/Contentful";
import Post from "../components/Post";
import PostEvent from "../components/PostEvent";

const Event =({eventPage,event})=> {
   event = event.sort(function(a,b){
     let dateA = new Date(a.eventDate)
     let dateB = new Date(b.eventDate);
     return dateA - dateB;
   })

   return (
          
        <Container>
          <Hero 
            imageUrl={eventPage.hero.fields.file.url}
            altText={eventPage.hero.fields.description}
          />

          <Post 
              title={eventPage.title}
              text={eventPage.heroText}
              buttonText={"Boka biljet"}
           
          />
          {event.map((e)=>{

            return(
          <PostEvent 
            imageUrl={e.ImageEvent.fields.file.url}
            altText={e.ImageEvent.fields.description}
            title={e.eventTitle}
            text={e.eventText} 
            price={e.eventPrice}
            date={e.eventDate}
            young={e.eventYoung}
          />
          )})
          }
          <Post className={"event-sub"}
                text={eventPage.textInfo}
                buttonText={"Kontakta oss"}
          />
          
        </Container>
      
    )
  }
  
  export default Event

export const getStaticProps = async () => {
  const res = await fetchEntries("eventSida");
  const resp = await res.map((i) => {
    return i.fields
  })
  const eventPage = resp[0];

  const resE= await fetchEntries("event");
  const respEvent = await resE.map((i) => {
    return i.fields
  })
  const event = respEvent;

  return {

    props: {
      eventPage,
      event
    }
  };

}
  const Container = styled.div`
  
  .event-sub{
    background:${colors.lightGrey};
    p{
      font-size: 24px;
      font-weight:bold;
    }
  
  }
  `;