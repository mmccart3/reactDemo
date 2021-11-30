// import { useState } from "react";

// import "./App.css";
// const App = () => {
//   const [persons, setPersons] = useState([
//     {name: "dan"},
//     {name: "ben"}
//   ])
//   const handler = (name) => {
//     alert(`hello there ${name}`)
//   }
//   return (
//     <div>
//       <h1>my sight</h1>
//       <Person name={persons[0].name} func={handler}/>
//       <Person name={persons[1].name} func={handler}/>
//     </div>
//   );
// };

// const Person = (props) => {
//   return <h2 onClick={() => props.func(props.name)}>hello {props.name}</h2>
// }

// export default App;




import {useState} from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(0)
const [anotherStateValue,setAnotherStateValue] = useState("unset")
const addHandler = () => {
  setCount(count + 1)
  if ((count)%2 == 0) {
    setAnotherStateValue("The value is odd")
  } else {
    setAnotherStateValue("The value is even")
  }}

  return ( 
  <div>
    <h1>{count}</h1>
    <button onClick={addHandler}>add one</button>
    {/* {((count)%2 == 0)
        ? <p>Count is even</p>
        : <p>Count is odd</p>
      } */}
    <p>{anotherStateValue}</p>
  </div>
  )};
export default App;

