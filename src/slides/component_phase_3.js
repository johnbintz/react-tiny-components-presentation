import React from 'react';
import Slide from '../slide';
import LargeText from '../large_text';
import Spacer from '../spacer';
import SmallText from '../small_text';
import CodeLarge from '../code_large';

export default (
  <Slide title="Component Phase 3">
    <CodeLarge>{`
import NavbarRight from './navbar_right';
import WithUserDate from './with_user_data';
import UserDataLoading from './user_data_loading';

@WithUserData
export default class UserData extends React.Component {
  render () {
    return (
      <NavbarRight>
        {!this.props.isLoaded && <UserDataLoading />}

        {this.props.isLoaded &&
          <div className='user-data'>
            <div className='name'>
              <span className='first-name'>
                {this.props.userData.firstName}
              </span>
              <span className='last-name'>
                {this.props.userData.lastName}
              </span>
            </div>
          </div>
        }
      </NavbarRight>
    );
  }
}
    `}</CodeLarge>
  </Slide>
);

