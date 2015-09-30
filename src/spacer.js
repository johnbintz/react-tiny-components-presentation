import React from 'react';

import WithCSS from 'react-css-modules/dist/linkClass';

import styles from './styles.scss';

export default function Spacer(props) {
  return WithCSS(
    <div styleName='spacer' />,
    styles
  );
}
