import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name: "Jun", age:12},
    {name: "ichiro", age:18},
    {name: "No name",},
    {name: 1, age: "aaa"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
        {
          profiles.map((profiles, index) => {
            return <User name={profiles.name} age={profiles.age} key={index} />
          })
        }
        <User name={1} age={"Taro"}/>
      </header>
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} years old!</div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
