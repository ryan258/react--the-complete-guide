import React from "react"
// these imported styles will be place in the head of your document by webpack with automatic prefixing taken care of for you
import "./Person.css"

// function person(props) {
const person = (props) => {
  return (
    <div className="Person">
      {/* <p>I'm a 👻 and I am {Math.floor(Math.random() * 1000)} years old</p> */}
      {/* You CAN pass down event handlers that change state in the parent component, that it doesn't have direct access to. It's a common pattern */}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      {/* use what we type here as a new name */}
      {/* v Two-way Data Binding v */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
