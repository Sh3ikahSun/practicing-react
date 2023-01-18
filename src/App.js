import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state txt",
      cat: 0
    }
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }

  // Every time this custom method is run, the render method is re-run.
  update(event) {
    this.setState({txt: event.target.value});
  }
}


// New state-less function component.
const Widget = (props) => <input type="text" onChange={props.update.bind(this)}/>


App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"  // This is overridden by the App text in index.js.
}


export default App