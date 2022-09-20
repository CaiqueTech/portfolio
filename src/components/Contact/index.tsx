import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactForm,
  ContactFormContainer,
  ContactS,
  ContactTitle,
} from "./style";

export const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "react_form", e.currentTarget, "VzQNPgx1ZTM_-GVXh")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactS>
      <ContactTitle>Contato</ContactTitle>
      <ContactFormContainer>
        <ContactForm onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Nome" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </ContactForm>
      </ContactFormContainer>
    </ContactS>
  );
};
