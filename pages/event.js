import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import Textures from "../config/texture";
import sunflowerBg from "../config/sunflowerBackground";
import device from "../config/device";
import { fetchEntries } from "../pages/api/Contentful";
import Post from "../components/Post";
import PostEvent from "../components/PostEvent";

const Event = ({ eventPage, event }) => {
  event = event.sort(function (a, b) {
    let positionA = a.sidoPosition;
    let positionB = b.sidoPosition;
    return positionB - positionA;
  });

  return (
    <Container>
      <Hero
        imageLandscapeUrl={eventPage.heroDesktop.fields.file.url}
        imagePortraitUrl={eventPage.heroMobil.fields.file.url}
        altText={eventPage.heroMobil.fields.description}
      />

      <Post
        className="hero-event"
        title={eventPage.title}
        text={eventPage.heroText}
      />
      <div>
        {event.map((e, i) => {
          return (
            <PostEvent
              imageUrl={e.ImageEvent.fields.file.url}
              altText={e.ImageEvent.fields.description}
              imageSize={e.ImageEvent.fields.file.details.image}
              title={e.eventTitle}
              text={e.eventText}
              young={e.eventYoung}
              index={i}
              key={i}
              //optinal
              price={e.eventPrice}
              date={e.eventDate}
            />
          );
        })}
      </div>
      <Post
        className={"event-sub"}
        text={eventPage.textInfo}
        buttonText={"Kontakta oss"}
      />
    </Container>
  );
};

export default Event;

export const getStaticProps = async () => {
  const res = await fetchEntries("eventSida");
  const resp = await res.map((i) => {
    return i.fields;
  });
  const eventPage = resp[0];

  const resE = await fetchEntries("event");
  const respEvent = await resE.map((i) => {
    return i.fields;
  });
  const event = respEvent;

  return {
    props: {
      eventPage,
      event,
    },
  };
};
const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .hero-event {
    ${sunflowerBg}
  }

  .event-sub {
    text-align: center;
  }
  margin-top:-2px;
 
  .event-sub {
    background: ${colors.lightGrey};

    p {
      font-family: "Noto Serif", serif;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  @media ${device.laptop} {
    .hero-event {
      margin: 0px;
      padding: 140px 10.1%;
      img {
        border: 10px solid black;
      }
      .content {
        max-width: 450px;
        width: 70%;
        p,
        h2 {
          text-align: left;
        }
        button {
          align-self: flex-start;
        }
      }
    }
    .event-sub .content button {
      align-self: center;
    }
   
  }
`;
