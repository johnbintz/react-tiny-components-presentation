import React from 'react';
import Slide from '../slide';
import IconDrawer from './icon_drawer';

const ticksPerRotation = 2000;

export default (
  <Slide title="wow">
    <IconDrawer width={10}
                height={6}
                imageSize={100}
                imagePadding={10}
                animate={(x, y, tick) => {
                  const frame = tick % ticksPerRotation;
                  const degree = (frame * 360) / ticksPerRotation;

                  if (x % 2 === y % 2) {
                    return {
                      transform: `rotateZ(0deg) rotate(${degree}deg)`
                    };
                  } else {
                    return {
                      transform: `rotateZ(0deg) rotate(-${degree}deg)`
                    };
                  }
                }}
                />
  </Slide>
);
