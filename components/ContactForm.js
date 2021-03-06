import React from "react";
import { useForm, ValidationError } from "@statickit/react";
import styled from "styled-components";
import colors from "../config/colors";
import ResponseContainer from "../components/ContactFormRes";
import Button from "../components/Button";
import device from "../config/device";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <ResponseContainer />;
  }
  return (
    <Container>
      <h2>Kontaktformulär</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="typ" className="form-first-label">
            Vad gäller det?*
          </label>
          <select className="form-select" id="typ" name="typ">
            <option value="Hålla i evenemang">Hålla i evenemang</option>
            <option value="Beställa catering">Beställa catering</option>
            <option value="Boka biljett">Boka biljett</option>
            <option value="Övrigt">Övrigt</option>
          </select>
          <ValidationError prefix="Typ" field="typ" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="name">Namn*</label>
          <input id="name" type="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email">E-postadress*</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone">Telefonnummer</label>
          <input id="phone" type="tel" name="phone" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message">Meddelande*</label>
          <div className="container-textarea">
            <textarea id="message" name="message" rows="1" required />
          </div>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div>
          <Button width={300} type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}
export default ContactForm;

const Container = styled.div`
  background: ${colors.greenBackground};
  width: 100%;
  max-width: 576px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: ${colors.black};
    margin-bottom: 32px;
  }

  form {
    width: 100%;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      label {
        font-family: "Noto Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1em;
        line-height: 19px;
        color: ${colors.black};
        margin-bottom: 11px;
      }

      .form-first-label {
        margin-bottom: 32px;
      }

      .form-select {
        font-style: normal;
        font-weight: normal;
        font-size: 1em;
        line-height: 19px;
        background: #ffffff;
        border: none;
        width: 100%;
        height: 48px;
        padding-left: 28px;
        margin-bottom: 32px;
        background: url("./icons/arrow-down-select.png") no-repeat right #ffffff;
        -webkit-appearance: none;
        background-position-x: 95%;
      }

      select:focus {
        outline-color: ${colors.inputBorderColor};

      }

      input {
        background: ${colors.greenBackground};
        border: 0px;
        border-bottom: 1px solid ${colors.inputBorderColor};
        margin-bottom: 32px;
      }

      input:focus {
        outline-color: ${colors.inputBorderColor};
      }

      .container-textarea {
        margin-bottom: 48px;
      }
      textarea {
        background: ${colors.greenBackground};
        resize: none;
        border: none;
        border-bottom: 1px solid ${colors.inputBorderColor};
      }

      textarea:focus {
        outline-color: ${colors.inputBorderColor};
      }
    }
  }
`;
