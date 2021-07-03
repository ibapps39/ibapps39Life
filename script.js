'use strict';

const e = React.createElement;

class myClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggleMe: false };
    }
    render() {
        return e(
            'button', { onClick: () => this.setState({toggleMe: true})}, 'Button Name'
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(myClass), domContainer);
// 'use strict';

// const e = React.createElement;

// class myClass extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {someToggleBool: false};
//   }

//   render() {
//       return e(
//           'button', { onClick: () => this.setState({someToggleBool: true}) }, 'Button Name'
//       );
//   }
// }
// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(myClass), domContainer);