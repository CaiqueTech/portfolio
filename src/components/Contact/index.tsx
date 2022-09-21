import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactForm,
  ContactFormContainer,
  ContactS,
  ContactTitle,
} from "./style";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

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
    <ContactS id="contact">
      <ContactTitle>Contato</ContactTitle>
      <ContactFormContainer>
        <ContactForm onSubmit={sendEmail}>
          <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
            type="text"
            name="name"
            placeholder="Nome"
            required
          />
          <input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.currentTarget.value)
            }
            placeholder="Mensagem"
            name="message"
          />
          <button type="submit">Enviar</button>
        </ContactForm>
      </ContactFormContainer>
    </ContactS>
  );
};
