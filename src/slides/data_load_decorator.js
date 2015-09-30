import React from 'react';
import Slide from '../slide';
import CodeLarge from '../code_large';

export default (
  <Slide title="data-load-decorator">
    <CodeLarge>{`
export default function WithUserData(Component) {
  return class WithUserData extends React.Component {
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
      return (<Component {...this.props} {...this.state} />);
    }
  }
}
    `}</CodeLarge>
  </Slide>
);

