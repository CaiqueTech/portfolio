import styled from "styled-components";
import { cssVariables } from "../../GlobalStyle";
import { SectionTitle } from "../Styles/SectionTitle";

export const ContactS = styled.section``;

export const ContactTitle = styled(SectionTitle)`
  ::after {
    right: -140px;
  }
`;

export const ContactFormContainer = styled.div`
  width: min(40rem, 100%);
  margin-inline: auto;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & > * {
    color: ${cssVariables.colorPrimary50};
    background-color: ${cssVariables.colorPrimary600};
  }

  & > *::placeholder {
    color: ${cssVariables.colorPrimary400};
  }

  & > input {
    padding: 1em 1em;
    resize: both;
  }

  & > textarea {
    padding: 1em 1em;
    height: 10rem;
    margin-bottom: 1em;
    resize: none;
  }

  & > button {
    padding: 1.5em 1em;
  }

  & > button:hover {
    background-color: ${cssVariables.colorPrimary550};
  }
`;
