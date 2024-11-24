import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import {Component} from 'react';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Counter />
    </div>
  );
}

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({count : this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }
 
  render(){
    return (
    <div>
      <div>count:  {this.state.count} </div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </div>
  )}
}

export default App;
