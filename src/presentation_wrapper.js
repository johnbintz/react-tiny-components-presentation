import React from 'react';
import WithCSS from 'react-css-modules/dist/linkClass';

import styles from './styles.scss';

export default function PresentationWrapper(props) {
  return WithCSS(
    <div styleName='presentation'>{props.children}</div>,
    styles
  );
}
