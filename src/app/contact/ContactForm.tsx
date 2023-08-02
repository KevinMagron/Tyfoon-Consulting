"use client";

import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      company: String(event.target.company.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent succesfuly");
      setLoading(false);
      event.target.name.value = "";
      event.target.company.value = "";
      event.target.email.value = "";
      event.target.phone.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <ul className="flex flex-col items-center justify-center gap-3 w-[80vw] md:w-[50vw] lg:w-[30vw] ">
        <li className="w-full ">
          <label className="text-black" htmlFor="name">Namn *</label>
          <input
            className="input "
            placeholder="Ange ditt för- och efternamn"
            type="text"
            name="name"
            id="name"
            required
            pattern="[a-zA-Z ]+"
          />
        </li>
        <li className="w-full">
          <label className="text-black" htmlFor="company">Företag *</label>
          <input
            className="input"
            placeholder="Ange ditt företag"
            type="text"
            name="company"
            id="company"
            required
          />
        </li>
        <li className="w-full">
          <label className="text-black" htmlFor="mail">E-postadress *</label>
          <input
            className="input"
            placeholder="Ange din e-postadress"
            type="email"
            name="email"
            id="email"
            required
          />
        </li>
        <li className="w-full ">
          <label className="text-black" htmlFor="phone">Telefon *</label>
          <input
            className="input"
            placeholder="Ange ditt telefonnummer"
            type="tel"
            name="phone"
            id="phone"
            required
            minLength={9}
            maxLength={13}
          />
        </li>
        <li className="w-full ">
          <label className="text-black" htmlFor="message">Ditt meddelande *</label>
          <textarea
            rows={4}
            className="w-full"
            placeholder="Berätta hur vi kan hjälpa dig. Ge oss gärna så många detaljer som möjligt"
            name="message"
            id="message"
            required
          />
        </li>
        <li className="flex gap-2 fit">
          <input
            className="h-5 w-5 text-orange-500 border-2 focus:border-orange-500 focus:ring-orange-500"
            placeholder="Ditt meddelande"
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <p className=" text-xs">
            Jag samtycker att mina personuppgifter används för att hantera min
            förfrågan.
          </p>
        </li>
        <li>
          <button
            type="submit"
            disabled={loading}
            className="disabled:bg-gray-400 disabled:text-gray-100 bg-orange-500 rounded-none px-20"
          >
            Skicka
          </button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
