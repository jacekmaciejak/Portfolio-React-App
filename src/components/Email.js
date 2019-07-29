import "../styles/Email.css";
import React from "react";

export default function Email() {
  return (
    <div className="email">
      <h1>Keep in touch</h1>
      <h2>Contact</h2>
        <section class="section-book" id="contact" data-aos="fade-up">
              <div class="book__form">
                  <form class="form" autocomplete="off" method="post" action="kontakt.php">
                      <div class="form__group">
                          <input type="text" class="form__input" placeholder="Name and surname" id="name" name="name" required>
                              <label for="name" class="form__label">Name and surname</label>
					</div>
                          <div class="form__group">
                              <input type="email" class="form__input" placeholder="Email address" id="email" name="email" required>
                                  <label for="email" class="form__label">Email address</label>
							</div>
                              <div class="form__group">
                                  <textarea name="message" id="message" cols="40" rows="4" class="form__input" placeholder="Message" required></textarea>
                              </div>
                              <div class="form__group">
                                  <button class="email_button" name="submit" type="submit">
                                      Send email &rarr;
								</button>
                              </div>
						</form>
                      </div>
				</section>
    </div>
  );
}
