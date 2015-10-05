import React from 'react';
import Slide from '../slide';
import SmallText from '../small_text';
import CodeLarge from '../code_large';

export default (
  <Slide title="Break out the containers in React 0.14">
    <SmallText>React 0.14 Stateless Function Components</SmallText>
    <CodeLarge>{`
export default function NavbarRight(props) {
  return (
    <div className='navbar navbar-right'>
      {props.children}
    </div>
  );
}
    `}</CodeLarge>
  </Slide>
);
