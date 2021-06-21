import { Component } from "react"
import "./App.css"
import UserInput from "./components/UserInput/UserInput"
import UserOutput from "./components/UserOutput/UserOutput"

class App extends Component {
  state = {
    username: "Super Manny!"
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.handleUsernameChange} currentName={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Orson" />
      </div>
    )
  }
}

export default App
