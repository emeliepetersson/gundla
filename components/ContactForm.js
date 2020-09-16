import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import styled from "styled-components";
import colors from "../config/colors";
import ResponseContainer from "../components/ContactFormRes";
import Button from "../components/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [hiddenInputValue, setHiddenInputValue] = React.useState(null);
  const [showHiddenInput, setShowHiddenInput] = React.useState(false);

  const handleClick = (value) => {
    setShowHiddenInput(true);
    setHiddenInputValue(value);
  }
  if (state.succeeded) {
    return <ResponseContainer/>;
  }
  return (
    <Container>
    <h1>Kontaktformulär</h1>
    <div className="form-buttons-container"> 
      <Button onClick={() => handleClick('Hålla i evenemang')} height={33} width={182} >Hålla i evenemang</Button>
      <Button onClick={() => handleClick('Överigt')} height={33} width={88}>Överigt</Button>
    </div>
    <div className="form-buttons-container"> 
      <Button onClick={() => handleClick('Boka biljett')} height={33} width={110}>Boka biljett</Button>
      <Button onClick={() => handleClick('Beställa catering')} height={33} width={160}>Beställa catering</Button>
    </div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="name">
          Name 
        </label>
        <input
          id="name"
          type="name" 
          name="name"
          required
          autoComplete="autocomplete_off_hack_xfr4!k"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          autoComplete="autocomplete_No_More_yesyes"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="phone">
          Telefonnummer
        </label>
        <input
          id="phone"
          type="tel" 
          name="phone"
          required
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
      </div>
      {showHiddenInput === true && 
      <div className="form-hidden-input">
        <label htmlFor="text">
            Vad gäller det?
          </label>
      <input id="text" type="text" name="text" value={hiddenInputValue} readOnly required/>
          <ValidationError 
            prefix="Text" 
            field="text"
            errors={state.errors}
          />
      </div>
      }
      <div>
      <label htmlFor="message">
          Meddelande
        </label>
        <div className="container-textarea">
          <textarea
            id="message"
            name="message"
            rows="1"
            required
          />
        </div>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div>
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </form>
    </Container>
  );
}
export default ContactForm;

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding-left: 37px;
padding-right: 37px;
padding-bottom: 55px;

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${colors.black};
  margin-bottom: 48px;
}

.form-buttons-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  button:focus {
    outline: none;
  }
}

.form-buttons-container:nth-child(3){
  margin-bottom: 48px;
}

form {
  width: 100%;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    label {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: ${colors.black};
      margin-bottom: 16px;
    }

    input {
      border: 0px;
      border-bottom: 1px solid ${colors.inputBorderColor};
      margin-bottom: 32px;
    }

    input:focus{
      outline: none;
    }

    .container-textarea{
      margin-bottom: 48px;
    }
    textarea {
      resize: none;
      border: none;
      border-bottom: 1px solid ${colors.inputBorderColor};
    }

    textarea:focus{
      outline: none;
    }

    button {
      margin: 0 auto;
    }
  }
}
`;