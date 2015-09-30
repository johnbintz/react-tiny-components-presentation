import _htmlIndex from './index.html';

import React from 'react';
import {render} from 'react-dom';

import Presentation from './presentation';

function Index() {
  return <Presentation />;
};

render(<Index />, document.getElementById('app'));
