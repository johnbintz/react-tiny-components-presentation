import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="Global CSS">
    <CodeLarge>{`
.navbar {
  color: green;
  background-color: red;
}

.navbar-right {
  color: orange;
  opacity: 1.25;
}

.five-million-others {
  .and-maybe-they-re-nested {
    @include or-autogenerate()
  }
}
    `}</CodeLarge>
  </Slide>
);
