import React, { useState, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUsers.module.css'

const AddUser = (props) => {
  // refs are cool because we can get access to the element's value w/o having to react to every key stroke
  //! REFS - 1) allows for a connection to the element that a ref is on
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  //! if you're just reading a value and don't plan on changing anything then you don't really need state, so go w/ refs
  // state as a keylogger is overkill
  //! if you're just reading values, go w/ refs
  // const [enteredUsername, setEnteredUsername] = useState('')
  // const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    // console.log(nameInputRef)
    // .current =='s the input element -- which will have a value
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age! 🤬'
      })
      return
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age! 👻'
      })
      return
    }
    // console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredName, enteredUserAge)

    //---- since we're not using the state to get the values anymore, instead refs
    // setEnteredUsername('')
    // setEnteredAge('')
  }

  // const usernameChangeHandler = (event) => {
  //   //! REFS 3.) Ref value from input is put to use/wired up to state
  //   setEnteredUsername(event.target.value)
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value)
  // }

  //! usually you don't want to overwrite the input value directly like this
  // unless you just want to reset the value entered by a user
  nameInputRef.current.value = ''
  ageInputRef.current.value = ''

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input //
            type="text"
            id="username"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            //! REFS 2.) Ref is placed on an element that we want to access the value of
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input //
            type="number"
            id="age"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
