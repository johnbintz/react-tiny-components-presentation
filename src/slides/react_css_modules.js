import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="react-css-modules">
    <CodeLarge>{`
import WithCSS from 'react-css-modules';
import styles from './navbar_styling.scss';

@WithCSS(styles)
export default class NavbarRight extends React.Component {
  render () {
    return (
      <div styleName='navbar'>
        {this.props.children}
      </div>
    );
  }
}
    `}</CodeLarge>
  </Slide>
);
