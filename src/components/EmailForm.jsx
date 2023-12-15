import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import MessageInput from "./MessageInput";

export default function EmailForm() {
  const [formState, setFormState] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formState.email) {
      setFormMessage("Per favore, completa tutti i campi obbligatori.");
      return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formState.email)) {
      setFormMessage("Per favore, inserisci un indirizzo email valido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Use formRef.current instead of templateParams
    emailjs.sendForm(
      '',
      '',
      formRef.current,
      ''
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormState({ email: "", message: "" });
        setFormMessage(
          "Grazie per averci contattato! Ti risponderemo al più presto."
        );
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setFormMessage(
          "Si è verificato un errore durante l'invio del messaggio. Riprova più tardi."
        );
      });
  };

  const clearFormMessage = () => {
    setFormMessage(null);
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6"
      >
        <ContactForm
          handleChange={handleChange}
          selectedContact={{
            email: formState.email,
            phone: formState.phone,
          }}
        />
        <MessageInput
          handleChange={handleChange}
          selectedMessage={formState.message}
        />
        <button
          type="submit"
          aria-label="submit button"
          className="rounded-md w-32 py-1 bg-white flex justify-center gap-4 items-center"
          disabled
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000000" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
          <h4>Send</h4>
        </button>
      </form>
      {formMessage && (
        <div className="text-xs">
          <button onClick={clearFormMessage} className="p-2 text-xs">
            X
          </button>
          {formMessage}
        </div>
      )}
    </>
  );
}