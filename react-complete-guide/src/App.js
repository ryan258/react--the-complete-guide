import "./App.css"
import Person from "./Person/Person"

import { Component } from "react"

class App extends Component {
  // property - variable in a class
  // props are passed from the outside
  // state is managed from inside a component - only available in cpomponents that extend Component
  state = {
    persons: [
      { name: "Ryan", age: 337 },
      { name: "Manny", age: 320 },
      { name: "Orson", age: 331 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("i have been clicked")
    this.setState({
      persons: [
        { name: "Ryananananaana", age: 337 },
        { name: newName, age: 320 },
        { name: "Orson", age: 333 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    console.log("i have been changed!")
    this.setState({
      persons: [
        { name: "Ryananananaana", age: 33 },
        { name: event.target.value, age: 30 },
        { name: "O-Dawg", age: 32 }
      ]
    })
  }

  render() {
    // example of inline-styles
    // - hovering is hard to do
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Helllo from App.js</h1>
          {/* syntax #1 - but can be inefficient bc of rerendering */}
          <button style={style} onClick={() => this.switchNameHandler("Smurf!")}>
            Switch Name
          </button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // pass event handler down to this Person as a prop
            // Syntax #2 use this syntax when you can
            // v Two-way Data Binding v
            click={this.switchNameHandler.bind(this, "MANNY!")}
            // with changed, we can wire up access it in <Person />
            changed={this.nameChangedHandler}
          >
            Hobbie: Nodding Politely
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </header>
      </div>
    )
  }
}

export default App

// The Modern Functional Component Way

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Helllo from App.js</h1>
//       </header>
//     </div>
//   )
// }

// import { useState } from "react"

// const App = (props) => {
//   // It's important to realize that old state get completely replaced with the new state in these function hooks
//   // - so you have to manually include all old state data
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Ryan", age: 37 },
//       { name: "Manny", age: 20 },
//       { name: "Orson", age: 31 }
//     ]
//     // otherState: "beep beep"
//   })
//   // but a more elegant solution would be to not manuallay merge states like this but rather use useState() again
//   const [otherState, setOtherState] = useState("beep beep")

//   console.log(personsState, otherState)

//   const switchNameHandler = (e) => {
//     // console.log("i have been clicked")
//     setPersonsState({
//       persons: [
//         { name: "Ryananananaana", age: 337 },
//         { name: "Manny", age: 320 },
//         { name: "Orson", age: 333 }
//       ],
//       otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Helllo from App.js</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </header>
//     </div>
//   )
// }
