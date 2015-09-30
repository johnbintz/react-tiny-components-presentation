import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="SCSS Local Styles">
    <CodeLarge>{`
@import './global';

.navbar {
  @extend %navbar;

  color: orange;
  opacity: 1.25;
}
    `}</CodeLarge>
  </Slide>
);
