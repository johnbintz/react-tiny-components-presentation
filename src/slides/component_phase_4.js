import React from 'react';
import Slide from '../slide';
import LargeText from '../large_text';
import Spacer from '../spacer';
import SmallText from '../small_text';
import CodeLarge from '../code_large';

export default (
  <Slide title="Component Phase 4">
    <CodeLarge>{`
import NavbarRight from './navbar_right';
import WithUserDate from './with_user_data';
import UserDataLoading from './user_data_loading';
import UserDataDisplay from './user_data_display';

@WithUserData
export default class UserData extends React.Component {
  render () {
    return (
      <NavbarRight>
        {!this.props.isLoaded && <UserDataLoading />}
        {this.props.isLoaded && <UserDataDisplay {...this.props.userData} />}
      </NavbarRight>
    );
  }
}
    `}</CodeLarge>
  </Slide>
);

