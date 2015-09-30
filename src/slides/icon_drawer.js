import React from 'react';

const MAX_FPS = 30;
const MAX_FPS_TIME = 1000 / MAX_FPS;

export default class IconDrawer extends React.Component {
  constructor (props) {
    super(props);

    this.startTimestamp = null;
    this.lastTimestamp = null;
    this.stopAnimating = false;

    this.state = {
      imageProperties: {}
    };
  }

  componentDidMount () {
    if (this.props.animate) {
      window.requestAnimationFrame(this.animate.bind(this));
    }
  }

  componentWillUnmount () {
    this.stopAnimating = true;
  }

  animate (timestamp) {
    this.lastTimestamp = this.lastTimestamp || timestamp;
    this.startTimestamp = this.startTimestamp || timestamp;

    const newImageProperties = {};

    this.forEachIcon((x, y) => {
      newImageProperties[`${x}-${y}`] = this.props.animate(
        x, y, timestamp - this.startTimestamp
      );
    });

    if (!this.stopAnimating) {
      this.setState({imageProperties: newImageProperties});

      setTimeout(() => {
        this.lastTimestamp = timestamp;
        window.requestAnimationFrame(this.animate.bind(this));
      }, Math.max(0, MAX_FPS_TIME - (timestamp - this.lastTimestamp)));
    }
  }

  forEachIcon (code) {
    for (let y = 0; y < this.props.height; ++y) {
      for (let x = 0; x < this.props.width; ++x) {
        code(x, y);
      }
    }
  }

  render () {
    const icons = [];

    this.forEachIcon((x, y) => {
      const offset = ((y % 2 === 0) ? this.props.imageSize : -this.props.imageSize) / 4;

      const styles = {
        position: 'absolute',
        top: (this.props.imageSize + this.props.imagePadding) * y,
        left: (this.props.imageSize + this.props.imagePadding) * x + offset
      };

      let additionalProperties = this.state.imageProperties[`${x}-${y}`] || {};

      Object.assign(styles, additionalProperties);

      icons.push(<img
        key={`icon-${x}-${y}`}
        src="https://cdn.auth0.com/blog/react-js/react.png"
        height={this.props.imageSize}
        width={this.props.imageSize}
        style={styles}
      />);
    });

    return <div style={{
      position: 'relative',
      width: (this.props.imageSize + this.props.imagePadding) * this.props.width,
      height: (this.props.imageSize + this.props.imagePadding) * this.props.height,
      margin: '0 auto'
    }}>{icons}</div>;
  }
}
