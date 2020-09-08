import styled from "styled-components";

 

const zoom = 6435;
const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${zoom}!2d12.028094864162664!3d57.68635801874599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1ssv!2sse!4v1599459390820!5m2!1ssv!2sse`


const Map =()=> {
  
    return (
        <MapContainer>
          <iframe src={mapSrc}>
          </iframe>
        </MapContainer>
    )
  
    }

const MapContainer = styled.div`
    width:375;
    height:406px;
    min-width:100%;
    min-height:100%;
    display:flex;
    overflow:hidden;
    align-items:center;
    justify-content:center;

    iframe {
      position:relative;
      border:0;
      min-width:100%;
      height:100%;
    }
   
  
`;

export default Map
