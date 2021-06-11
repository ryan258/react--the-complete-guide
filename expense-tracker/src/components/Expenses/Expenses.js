import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found 👻</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)
  }

  return (
    <div>
      <Card className="expenses">
        {/* Render the list dynamically */}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses
