import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import device from "../config/device";
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
         imageLandscapeUrl={eventPage.heroDesktop.fields.file.url}
         imagePortraitUrl={eventPage.heroMobil.fields.file.url}
         altText={eventPage.heroMobil.fields.description}
       />

          <Post className="hero-event"
              title={eventPage.title}
              text={eventPage.heroText}
              buttonText={"Boka biljet"}
           
          />
          <AtMediaEvent>
          {event.map((e,i)=>{

            return(
          <PostEvent 
            imageUrl={e.ImageEvent.fields.file.url}
            altText={e.ImageEvent.fields.description}
            title={e.eventTitle}
            text={e.eventText} 
            price={e.eventPrice}
            priceShifting={e.priceShifting}
            date={e.eventDate}
            young={e.eventYoung}
            index ={i}
          />
          )})
          }
       </AtMediaEvent>
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
    width:100%;
    .hero-event .content h2,.event-sub{
          text-align:center;
    }
    .event-sub{
      background:${colors.lightGrey};
  
      p{
        font-size: 24px;
        font-weight:bold;
      }
    
    }
    @media ${device.laptop} {  
    .hero-event{
        margin:0px;
        padding:70px 110px;
        .content{
          max-width:500px;
          width:70%;
           p,h2{
            text-align:left;
          }
          button{
            align-self: flex-start;
          }
        }
      
      }
       .event-sub .content button{
           align-self:center;
        }
        .event-sub{
          padding:0;
          background:${colors.white};
        }
        .hero-event .content {
         
        }
    }
  `;

  const AtMediaEvent = styled.div`
        @media ${device.laptop} {  
        
  
  `;