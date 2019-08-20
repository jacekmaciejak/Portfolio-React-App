import React from "react";

export const theme = {
  media: {
    phone: "@media (max-width: 600px)",
    tabPort: "@media (max-width: 900px)",
    tabLand: "@media (max-width: 1200px)",
    bigDesktop: "@media (min-width: 1800px)"
  }
};

//MEDIA QUERY MANAGER
/*
0 - 600px: Phone
600 - 900px: Tablet portrait
900 - 1200px: Tablet landscape
1200 - 1800px is where our normal styles apply
1800px + : Big desktop
*/
