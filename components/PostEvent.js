import Post from "./Post";
import InfoBadge from "./InfoBadge"
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "./Image";
import device from "../config/device";
import colors from "../config/colors";
import Button from "./Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostEvent = ({
                   altText,imageUrl,imageSize,
                   title,text,
                   price,
                   date,young,
                   index
                  })=>{

  const imgPosition = ()=>{
    if(imageSize.width / imageSize.height < 0.7){
      return {
        pos: `object-position:0% ${40}%;`,
      };
    }
    return"";
  };
    
    
  const imgStyle = imgPosition();
  
  let checkSide = (index%2 === 1? true: false)
   
  return(
    <EventContainer 
          imgStyle={imgStyle}
          checkSide={checkSide} 
          >
      <div className="event-image" tabIndex="0">
      
          <Image
         
            imageUrl={imageUrl}
            altText={altText}
        
            />

      </div>
      <EventInfo 
      checkSide={checkSide} >
      { young &&
          <BadgePosition>
          <InfoBadge text={"För de små!"} checkSide={checkSide} />
      </BadgePosition>
      }
        <div tabIndex="0" className="event-post-text">

            <h2>{title || ""}</h2>
            {documentToReactComponents(text) || ""}
            <Button>
              Boka billjet
            </Button>
      </div>
      </EventInfo>
    </EventContainer>
    
  )
}

// ${(props) => props.imgStyle.margin};
const EventContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  *:focus {
    outline: 2px solid ${colors.blue};
  }

  .event-image {
    overflow: hidden;
    border:1px solid green;
    position: relative;
    min-height: 406px;
    max-height: 550px;
    max-width: 576px;
    position: relative;
    width: 100%;

    img {
      position: absolute;
      width: 100%;
      object-fit: cover;
      ${(props) => props.imgStyle.pos}
    }
  }

  @media ${device.laptop} {
    padding: 75px 10%;
    background: ${(props) =>
      props.checkSide ? colors.white : colors.greenBackground};
    flex-direction: ${(props) => (props.checkSide ? "row" : "row-reverse")};

    .event-image {
 
      min-height:450px;
       max-width: 576px;
      img {
    
        width:100%;
        transition: 0.2s ease;
      
    }
  }
`;

const EventInfo = styled.div`
  position:relative; 
  display:flex;
  flex-direction:column;

    .event-post-text{ 
      width:100%;
      padding:48px 10% 64px 10%;
    
      p{
        padding:16px 0 32px;
       
      }
    }
  }
 @media ${device.laptop} { 
     padding${(props) => props.checkSide ? "-left: 7.6%" : "-right:7.6%"};
      
      min-height:450px;
      min-width:400px;
    
     .event-post-text{ 
      max-width:400px;
       padding:0;
       margin:auto 0;  
       width:100%;
   
     }
    }
`




const BadgePosition = styled.div`
  position:absolute;
  width:100%;
  overflow: visible;
  height:1px;
  padding:0px;
  top:0px;

 
`;
PostEvent.propTypes = {
    altText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageSize:PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.object,
    young:PropTypes.bool,
    index:PropTypes.number,
    price: PropTypes.number,
    date: PropTypes.any,
};
export default PostEvent

/* function for writing out date for event
const editDate = (date) => {
  const dateOptions = {
      day: '2-digit',
      month: 'long',
      hourCycle: "h24",
      hour:"2-digit",
      minute:"2-digit"
    }
  const eventDate = new Date(date).toLocaleDateString("sv-SE",dateOptions).split(" ")
  return `${eventDate[0]} ${eventDate[1]} kl ${eventDate[2]}`
}

*/