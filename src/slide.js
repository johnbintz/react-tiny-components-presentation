import React from 'react';
import WithCSS from 'react-css-modules/dist/linkClass';

import styles from './styles.scss';

export default function Slide(props) {
  return WithCSS(
    <div styleName='slide'>
      <div styleName='slide-inner'>
        {props.children}
      </div>
    </div>,
    styles
  );
};
