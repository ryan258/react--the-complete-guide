import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  // state will detach the variable from the lifecycle, thus survives all that
  // and when it updates the component rerenders
  //! you can and probably will have multiple states per component
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  //! two way binding is very useful when you're dealing w/ forms
  // - just give them a value that uses a state variable

  //! ALT: multiple states in 1, by passing an obj as a value
  // but now whenever you update a piece of the state, you have to update all 3
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  //! fun fact: whenever you read the value of an input value, it'll be a string, which is why we're initializing all out states w/ an empty string
  const titleChangeHandler = (e) => {
    //! ALT:
    // then to update you would pass in a new obj - but it will replace, not merge the new one
    // - this would dump the other 2 states
    // setUserInput({
    // so you need to copy in the other 2 values to keep them around
    //...userInput,
    //enteredTitle: e.target.value,
    // })
    // but ^^^ updating state like this isn't best practice, bc whenever you depend on the previous state, so call it like this vvv
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // })
    // console.log('title changed!', e)
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    // batch up the form data into a single object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData)
    // clear form values after submit
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
