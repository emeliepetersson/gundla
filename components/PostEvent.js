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

  const imgStyling = ()=>{
    if(imageSize.width / imageSize.height < 0.7){
      return{
      margin: `margin-top:-${10 + ((imageSize.height / 1000) * 2)}%`,
      }
    }
    return"";
  };
    
    
  const imgStyle = imgStyling();

  let checkSide = (index%2 === 1? true: false)
   
  return(
    <EventContainer 
          imgStyle={imgStyle}
          checkSide={checkSide} 
          >
      <div className="event-image" tabIndex="0">
        <div className="image-size">
          <Image
         
            imageUrl={imageUrl}
            altText={altText}
        
            />
        </div>
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


const EventContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align:left;
    *:focus {
   outline:2px solid ${colors.blue};
  }
    ,.event-image{
         width: 100%;
    }
    .event-image{
      position:relative;
      max-height:550px;
    }
   
   .image-size .img-size img{
       
       position:absolute;
      
    }

  .event-image {
      height:auto;
      overflow: hidden;
        .image-size{
          overflow:visible;
           width:100%;
           height:100%;
           img{
             width:102%;
             object-fit:cover;
              ${(props) => props.imgStyle};
            }
          }
      

     }

  @media ${device.laptop} { 
    padding:75px 10%;
    background:${ (props) => props.checkSide ? colors.white :colors.lightBlue };
    flex-direction: ${ (props) => props.checkSide ? "row" :"row-reverse"};
  

    .event-image{  

      max-height:450px;
      max-width:50%;
      background:green;
      .image-size{ 
        display:flex;
       
        min-width:570px;
       background:red;
      
      }
     .image-size img{
        min-width:100%;
        ${(props) => props.imgStyle.margin};
        transition:0.2s ease;
      }
    }
   
   }
`;
// 
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