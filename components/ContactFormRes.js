import styled from "styled-components";
import colors from "../config/colors";

const FormRes = () => {
    return (
        <ResponseContainer>
        <h2>Tack för ditt mail!</h2>
        <p>Vi återkommer till dig så fort vi kan.</p>
        </ResponseContainer>
    );
};

export default FormRes;

const ResponseContainer = styled.div`
width: 375px;
height: 304px;
display: flex; 
justify-content: center;
align-items: center; 
flex-direction: column;
  h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color:${colors.dark};
    margin-bottom: 20px;
  }

  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color:${colors.dark};
  }
`;

