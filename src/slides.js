import React from 'react';
import Slide from './slide';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const {cloneElement} = React;

import WithCSS from 'react-css-modules';

import styles from './styles.scss';

@WithCSS(styles)
export default class Slides extends React.Component {
  render () {
    const currentSlide = cloneElement(
      this.props.slides[this.props.currentSlide],
      { key: this.props.currentSlide }
    );

    document.title = currentSlide.props.title;

    return (
      <CSSTransitionGroup styleName='transitions'
                          transitionAppearTimeout={100}
                          transitionEnterTimeout={100}
                          transitionLeaveTimeout={100}
                          component='div'
                          transitionName='slide'>
        {currentSlide}
      </CSSTransitionGroup>
    );
  }
}
