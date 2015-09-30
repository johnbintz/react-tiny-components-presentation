import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="Rendered react-css-modules CSS">
    <CodeLarge>{`
/* from the @extend */
.NavbarRight__navbar__abcdef, .others {
  color: green;
  background-color: red;
}

/* from the style itself */
.NavbarRight__navbar__abcdef {
  color: orange;
  opacity: 1.25;
}
    `}</CodeLarge>
  </Slide>
);
