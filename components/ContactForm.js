import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import styled from "styled-components";
import colors from "../config/colors";
import ResponseContainer from "../components/ContactFormRes";
import Button from "../components/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <ResponseContainer/>;
  }
  return (
    <Container>
    <h1>Kontaktformulär</h1>

    <form onSubmit={handleSubmit} autoComplete="off">

      <div>
      <label htmlFor="typ" className="form-first-label">Vad gäller det?</label>
      <select id="typ" name="typ">
        <option value="Hålla i evenemang">Hålla i evenemang</option>
        <option value="Beställa catering">Beställa catering</option>
        <option value="Boka biljett">Boka biljett</option>
        <option value="Övrigt">Övrigt</option>
      </select>
      <ValidationError prefix="Typ" field="typ" errors={state.errors}/>
      </div>

      <div>
        <label htmlFor="name" >
          Namn 
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
width: 100%;
max-width: 576px;
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
      margin-bottom: 11px;
    }

    .form-first-label {
      margin-bottom: 32px;
    }

    select {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      background: #FFFFFF;
      border-radius: 9px;
      border: none;
      width: 300px;
      height: 48px;
      padding-left: 28px;
      margin-bottom: 32px;
      background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #D7D7D7;
      -webkit-appearance: none;
      background-position-x: 260px;
    }
    
    select:focus{
      outline: none;
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