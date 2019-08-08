import "../styles/Email.scss";
import React from "react";

export default function Email() {
  return (
    <div className="email">
      <h1 className="email__title" data-aos="fade-up">
        Zachęcam do kontaktu
      </h1>
      <h2 className="email__subtitle" data-aos="fade-up">
        Kontakt
      </h2>
      <section class="section-book" id="contact" data-aos="fade-up">
        <div class="book__form">
          <form
            class="form"
            autocomplete="off"
            method="post"
            action="kontakt.php"
          >
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Imię i nazwisko"
                id="name"
                name="name"
                required
              />
              <label for="name" class="form__label">
                Imię i nazwisko
              </label>
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Adres email"
                id="email"
                name="email"
                required
              />
              <label for="email" class="form__label">
                Adres email
              </label>
            </div>
            <div class="form__group">
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="4"
                class="form__input"
                placeholder="Wiadomość"
                required
              />
            </div>
            <div class="form__group">
              <button class="email_button" name="submit" type="submit">
                Wyślij &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
