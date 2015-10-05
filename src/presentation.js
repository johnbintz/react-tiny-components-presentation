import React from 'react';
import WithCSS from 'react-css-modules';

import Slides from './slides';
import SlideList from './slide_list';
import PresentationWrapper from './presentation_wrapper';

import styles from './styles.scss';

@WithCSS(styles)
export default class Presentation extends React.Component {
  constructor (props) {
    super(props);

    let currentSlide = 0;

    const oldState = window.history.state;
    if (oldState && oldState.currentSlide) {
      currentSlide = oldState.currentSlide;
    }

    this.state = { currentSlide: currentSlide };
  }

  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
  }

  advance () {
    const value = Math.min(this.state.currentSlide + 1, SlideList.length - 1);

    this.setState({currentSlide: value});
  }

  retreat () {
    const value = Math.max(this.state.currentSlide - 1, 0);

    this.setState({currentSlide: value});
  }

  componentDidUpdate () {
    window.history.pushState(this.state, this.state.currentSlide, `/slide/${this.state.currentSlide}`);
  }

  handleMouseDown (e) {
    this.advance();
  }

  handleKeyUp (e) {
    e.preventDefault();

    switch (e.keyIdentifier) {
      case 'U+0020':
      case 'Right':
        this.advance();
        break;
      case 'Left':
        this.retreat();
        break;
    }
  }

  render () {
    return (
      <PresentationWrapper>
        <Slides slides={SlideList} {...this.state} />
      </PresentationWrapper>
    );
  }
}
