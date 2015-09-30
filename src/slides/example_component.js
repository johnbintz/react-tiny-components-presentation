import React from 'react';
import Slide from '../slide';
import LargeText from '../large_text';
import Spacer from '../spacer';
import SmallText from '../small_text';
import Code from '../code';

export default (
  <Slide title="Example Component">
    <Code>{`
export default class UserData extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoaded: false,
      userData: null
    };
  }

  componentWillMount () {
    axios
      .get(\`/data/user/\${this.props.userID}\`)
      .then(({data}) => {
        this.setState({
          userData: data.userData,
          isLoaded: true
        });
      });
  }

  render () {
    return (
      <div className='navbar navbar-right'>
        {!this.state.isLoaded &&
          <div className='user-data-loading'>
            Loading...
          </div>
        }

        {this.state.isLoaded &&
          <div className='user-data'>
            <div className='name'>
              <span className='first-name'>
                {this.state.userData.firstName}
              </span>
              <span className='last-name'>
                {this.state.userData.lastName}
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}
    `}</Code>
  </Slide>
);
