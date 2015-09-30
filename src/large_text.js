import React from 'react';
import WithCSS from 'react-css-modules/dist/linkClass';

import styles from './styles.scss';

export default function LargeText(props) {
  return WithCSS(
    <div styleName='large-text'>{props.children}</div>,
    styles
  );
}
