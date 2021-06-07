import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem({ expense: { title, amount, date } }) {
  // const expenseDate = new Date(2021, 3, 13)
  // const expenseTitle = 'Red Bull'
  // const expenseAmount = 6.79

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
