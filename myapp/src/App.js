import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
        {name:"Taro", age: 12},
        {name:"Jiro", age: 11},
        {name:"Hana", age: 3}
  ]
  return (
      <div>
        {
          profiles.map((profiles, index) => {
            return <User name={profiles.name} age={profiles.age} key={index}/>
          })
        }
        </div>
    );
}

const User = (props) => {
  return <div>{props.name} {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
