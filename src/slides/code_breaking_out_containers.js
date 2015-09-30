import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="Break out the containers">
    <CodeLarge>{`
export default class NavbarRight extends React.Component {
  render () {
    return (
      <div className='navbar navbar-right'>
        {this.props.children}
      </div>
    );
  }
}
    `}</CodeLarge>
  </Slide>
);
