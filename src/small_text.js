import React from 'react';
import WithCSS from 'react-css-modules/dist/linkClass';

import styles from './styles.scss';

export default function SmallText(props) {
  return WithCSS(
    <div styleName='small-text'>{props.children}</div>,
    styles
  );
}
