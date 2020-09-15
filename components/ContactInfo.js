import styled from "styled-components";
import PropTypes from "prop-types";

const ContactInfo = ({
  adress,
  postcode,
  openingHours,
  email,
  phonenumber,
  className,
}) => {
  return (
    <Container className={className}>
      <div>
        <h3>{adress}</h3>
        <p>{postcode}</p>
      </div>
      <ul className={"openingHours"}>
        {openingHours && <h3>Öppettider</h3>}
        {openingHours &&
          openingHours.map((day, index) => <li key={index}>{day}</li>)}
      </ul>
      {email && phonenumber && (
        <div className={"contact"}>
          <h3>Kontakta oss</h3>
          <p>{email}</p> <p>{phonenumber}</p>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p,
  li {
    margin: 10px 0;
  }

  .openingHours,
  .contact {
    padding-top: 30px;
  }
`;

ContactInfo.propTypes = {
  adress: PropTypes.string,
  postcode: PropTypes.string,
  openingHours: PropTypes.array,
  email: PropTypes.string,
  phonenumber: PropTypes.string,
};

export default ContactInfo;
