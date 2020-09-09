import styled from "styled-components";
import PropTypes from "prop-types";

const ContactInfo = ({ info }) => {
  console.log(info);

  return (
    <Container>
      <p>{info[0].adress}</p>
      <p>{info[0].postcode}</p>
      <p>{info[0].openingHours}</p>
      <p>{info[0].email}</p> <p>{info[0].phonenummer}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

ContactInfo.propTypes = {};

export default ContactInfo;
