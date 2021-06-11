import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)

    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={startEditingHandler} onCancel={stopEditingHandler} />}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense
