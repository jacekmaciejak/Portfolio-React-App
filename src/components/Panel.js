import React from "react";
import "../styles/Panel.scss";
import rwd from "../images/rwd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faGithub,
  faJsSquare,
  faReact,
  faLinkedinIn,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

export default function Panel({ openModalFn }) {
  return (
    <div className="sub_about_2" data-aos="fade-up">
      <div className="sub_about_panel">
        <ul>
          <li className="p-5">
            <a
              href="https://www.facebook.com/profile.php?id=100007445748069"
              target="_blank"
            >
              <i className="fab">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-2">
            <a href="#panel" onClick={openModalFn}>
              <i className="fab">
                <FontAwesomeIcon icon={faHtml5} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-11">
            <a href="#panel">
              <i className="fab">
                <FontAwesomeIcon icon={faJsSquare} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-4">
            <a
              href="www.linkedin.com/in/jacek-maciejak-frontend-developer"
              target="_blank"
            >
              <i className="fab">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-1">
            <a href="#panel">
              <i className="fab">
                <FontAwesomeIcon icon={faCss3Alt} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-6">
            <a href="#panel">
              <i className="fab">B4</i>
            </a>
          </li>
          <li className="p-7">
            <a href="#panel">
              <i className="fab">
                <img src={rwd} alt="Icon" />
              </i>
            </a>
          </li>
          <li className="p-8">
            <a href="#panel">
              <i className="fab">
                Flex <br /> Box
              </i>
            </a>
          </li>
          <li className="p-9">
            <a href="#panel">
              <i className="fab">Grid</i>
            </a>
          </li>
          <li className="p-10">
            <a href="#panel">
              <i className="fab">
                <FontAwesomeIcon icon={faSass} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-3">
            <a href="https://github.com/jacekmaciejak" target="_blank">
              <i className="fab">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </i>
            </a>
          </li>
          <li className="p-12">
            <a href="#panel">
              <i className="fab">
                <FontAwesomeIcon icon={faReact} size="lg" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
