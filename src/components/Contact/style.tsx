import styled from "styled-components";
import { SectionTitle } from "../Styles/SectionTitle";

export const ContactS = styled.section``;

export const ContactTitle = styled(SectionTitle)`
  ::after {
    right: -140px;
  }
`;

export const ContactFormContainer = styled.div`
  margin-top: 8rem;
  width: min(40rem, 100%);
  margin-inline: auto;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & > input {
    padding: 1em 1em;
  }

  & > input:nth-last-of-type(2) {
    padding: 5em 1em;
    margin-bottom: 1em;
  }
`;
