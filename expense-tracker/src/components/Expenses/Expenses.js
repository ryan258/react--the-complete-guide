import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js')
    // console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  // const filterYearHandler = (e) => {
  //   // setYearFilter(e.target.value)
  //   console.log('Expenses.js')
  //   console.log(yearFilter)
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
