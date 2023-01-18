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
    return (
      <div>
        <Title text="Practicing React"/>
        <p>{this.state.txt} - {this.state.cat}</p>
        <TextBox update={this.update.bind(this)}/>
        <div><Button>I <Heart/> React</Button></div>
      </div>
    )
  }

  // Every time this custom method is run, the render method is re-run.
  update(event) {
    this.setState({
      txt: event.target.value,
      cat: this.state.cat + 1
    });
  }
}


// State-less function components.
const Title = (props) => <h1>Summer's App: {props.text}</h1>

const TextBox = (props) => <input type="text" onChange={props.update.bind(this)}/>

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&hearts;</span>


App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"  // This is overridden by the App text in index.js.
}

Title.propTypes = {
  text(props, propName) {
    if (!(propName in props)) {
      return new Error(`Missing ${propName}`);
    }
    if (props[propName].length < 3) {
      return new Error(`${propName} is too short.`);
    }
  }
}


export default App