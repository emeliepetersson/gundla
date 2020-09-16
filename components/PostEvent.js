import Post from "./Post";
import InfoBadge from "./InfoBadge"
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "./Image";
import device from "../config/device";
import colors from "../config/colors";

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

const PostEvent = ({
                   altText,imageUrl,
                   title,text,
                   price,priceShifting,
                   date,young,
                   index
                  })=>{
  
    let checkSide = (index%2 === 1? true: false)
   
  return(
    <EventContainer checkSide={checkSide} >
      
      <Image
        imageUrl={imageUrl}
        altText={altText}
      />
      
      <div className="event-post">
      { young &&
      <BadgePosition>
          <InfoBadge text={"För de små!"} checkSide={checkSide} />
      </BadgePosition>
      }
      <div className="event-post-text">

      <Post className={"event"}
          title={title}
          text ={text}
        />
  
        <EventInfo>
            <div>
              <h4>
                Pris
              </h4>
              <p>
            {!priceShifting ? price +" kr" :"Pris varierar beroende på aktivitet "}  
             </p>
            </div>
           
          </EventInfo>
        </div>
      </div>
    </EventContainer>
    
  )
}


const EventContainer = styled.div`
    width:100%;
    padding-bottom:110px;
    position:relative;
      img{
        width:100%;
      }
    .event{
         padding:32px 10% 50px 10%;
       p,h2{
        margin:0;
      }
      h2{
        padding:48px 0px 38px 0px;
      }
    }
    .content{ 
      padding:0;
      p{
        text-align:left;
      }
    
    }
  @media ${device.laptop} { 
    width:100%;
    padding: 75px 9%;
    display:flex;
    background:${ (props) => props.checkSide ? colors.white :colors.lightGrey };
    flex-direction: ${ (props) => props.checkSide ? "row" :"row-reverse"};
      img{
        align-self:center;
        width:50%;
     
      }
      .event-post{
        width:50%;
      }
       .event, .event .content{
          padding:0;
          margin:0;
          width:100%;
         
          h2,p{
            padding-left:0;
            text-align:left;
          }
        }
        .event-post-text{
          padding: 100px 10%;
          max-width:500px;
          height:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }
   }
`;
const EventInfo = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  div {
    text-align:center;
    width:100%;
   
    h4{
    padding:0;
    margin:0;
    padding-bottom:10px;

    }
  }
    @media ${device.laptop} { 
       padding:0;
       div{
         padding-top:32px;
          text-align:left;
         
       }

    }
`




const BadgePosition = styled.div`
  position:relative;
  width:100%;
  overflow: visible;
  height:1px;
  padding:0px;
 
`;
PostEvent.propTypes = {
    altText: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.object,
    price:PropTypes.number,
    priceShifting:PropTypes.bool.isRequired,
    date:PropTypes.any,
    young:PropTypes.bool,
    index:PropTypes.number
};
export default PostEvent