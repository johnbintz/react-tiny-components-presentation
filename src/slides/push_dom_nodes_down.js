import React from 'react';
import Slide from '../slide';
import LargeText from '../large_text';
import SmallText from '../small_text';
import Spacer from '../spacer';

export default (
  <Slide title="Push DOM Nodes Down">
    <LargeText>Push DOM Nodes Down</LargeText>
    <SmallText>...by making containers</SmallText>
    <SmallText>...by moving prop renderers deeper </SmallText>
    <Spacer />
    <SmallText>(this applies to React Native, too!)</SmallText>
  </Slide>
);
