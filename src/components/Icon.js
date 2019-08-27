import React from "react";
import { icon } from "./Data/Data";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  position: relative;
  z-index: 99999;
`;

export default function Icon({ icon, title, link }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper data-aos="fade-up">
        <Ul>
          <Li className="p-5">
            <A
              href="https://www.facebook.com/profile.php?id=100007445748069"
              target="_blank"
            >
              <I className="fab">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </I>
            </A>
          </Li>
        </Ul>
      </StyledWrapper>
    </ThemeProvider>
  );
}
