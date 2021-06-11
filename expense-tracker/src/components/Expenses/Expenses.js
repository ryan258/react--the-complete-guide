import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        {/* Render the list dynamically */}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
