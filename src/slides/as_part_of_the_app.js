import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="As part of the app">
    <CodeLarge>{`
import UserData from './user_data';

export default class Application extends React.Component {
  render () {
    return (
      <ApplicationContainer>
        <Header>
          <UserData />
        </Header>
        <ContentContainer>
          <Sidebar>
            <SomeNavMenu />
          </Sidebar>
          <Content>
            <RouteHandler />
          </Content>
        </ContentContainer>
      </ApplicationContainer>
    );
  }
}
    `}</CodeLarge>
  </Slide>
);

