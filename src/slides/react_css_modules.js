import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';
import SmallText from '../small_text';

export default (
  <Slide title="react-css-modules">
    <SmallText><code>react-css-modules</code></SmallText>
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
