import React from "react";
import "../styles/Panel.scss";
import rwd from "../images/rwd.png";

export default function Panel() {
  return (
    <div className="sub_about_2" data-aos="fade-up">
      <div className=" sub_about_panel">
        <ul>
          <li class="p-5">
            <a
              href="https://www.facebook.com/profile.php?id=100007445748069"
              target="_blank"
            >
              <i class="fab fa-facebook-f" />
            </a>
          </li>
          <li class="p-2">
            <a href="#panel">
              <i class="fab fa-html5" />
            </a>
          </li>
          <li class="p-11">
            <a href="#panel">
              <i class="fab fa-js" />
            </a>
          </li>
          <li class="p-4">
            <a
              href="www.linkedin.com/in/jacek-maciejak-frontend-developer"
              target="_blank"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="p-1">
            <a href="#panel">
              <i class="fab fa-css3-alt" />
            </a>
          </li>
          <li class="p-6">
            <a href="#panel">
              <i class="fab">B4</i>
            </a>
          </li>
          <li class="p-7">
            <a href="#panel">
              <i class="fab">
                <img src={rwd} alt="Icon" />
              </i>
            </a>
          </li>
          <li class="p-8">
            <a href="#panel">
              <i class="fab">
                Flex <br /> Box
              </i>
            </a>
          </li>
          <li class="p-9">
            <a href="#panel">
              <i class="fab">Grid</i>
            </a>
          </li>
          <li class="p-10">
            <a href="#panel">
              <i class="fab fa-sass" />
            </a>
          </li>
          <li class="p-3">
            <a href="https://github.com/jacekmaciejak" target="_blank">
              <i class="fab fa-github" />
            </a>
          </li>
          <li class="p-12">
            <a href="#panel">
              <i class="fab fa-react" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
