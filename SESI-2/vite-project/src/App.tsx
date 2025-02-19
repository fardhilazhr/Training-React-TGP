// import React from "react";

import { useState } from "react"
import Button from "./component/UI/Button"
import Hello from "./component/Feature/Hello"

// class App extends React.Component<object, {count: number}>{
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   decrement() {
//     this.setState({
//       count: this.state.count - 1
//     });
//   }

// }


// component menerima 1 parameter berupa object
// // contoh inline
// function Hello({name, age}: {name: string, age: number}) {
//   return (
//     <h1>Hello { name } - {age}</h1>
//   )
// }


// stateful component, karena memiliki state -> mostly dari parent
function App() {
  const [count, setCount] = useState(0)


  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Button label="Increment" onClick={increment}/>
      <Button label="decrement" onClick={decrement} color = "red"/>
      

      <Hello name="John" age={30}/>
    </div>
  );
  
}
export default App