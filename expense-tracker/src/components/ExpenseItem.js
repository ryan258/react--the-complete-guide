import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021, 3, 13)
  const expenseTitle = 'Red Bull'
  const expenseAmount = 6.79

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
