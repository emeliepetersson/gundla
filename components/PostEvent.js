import Post from "./Post";
import InfoBadge from "./InfoBadge"
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "./Image";


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

const PostEvent = ({altText,imageUrl,title,text,price,date,young})=>{

  
  return(
    <EventContainer  >
  
      <Image
        imageUrl={imageUrl}
        altText={altText}
      />
      { young &&
      <BadgePosition>
        <InfoBadge text={"För de små!"} />
      </BadgePosition>
      }
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
              {price || 0} kr 
             </p>
            </div>
            <div>
              <h4>
                Tid
              </h4>
              <p>
            {editDate(date)}
             </p>
            </div>
          </EventInfo>
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
       padding-bottom:0px;
       padding-top:48px;
       p{
        padding:32px 38px 50px 38px;
        margin:0;

      }
    }
    .content{ 
      padding:0;
        margin:0;
    
    }
`;
const EventInfo = styled.div`
  display:flex;
  flex-direction:row;
  padding:0px 38px;
  width:100%;
  div {
    text-align:center;
    width:100%;
    h4{
    padding:0;
    padding-bottom:10px;
    margin:0;
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
    date:PropTypes.any,
    young:PropTypes.bool
};
export default PostEvent