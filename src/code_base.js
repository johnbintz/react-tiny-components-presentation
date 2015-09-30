import React from 'react';
import Highlight from 'highlight.js';

import WithCSS from 'react-css-modules';

import styles from './styles.scss';

@WithCSS(styles)
export default class CodeBase extends React.Component {
  componentDidMount () {
    Highlight.highlightBlock(this.refs.code);
  }

  render () {
    return (
      <pre styleName={this.props.codeClass} ref='code'>{this.props.children}</pre>
    );
  }
};
