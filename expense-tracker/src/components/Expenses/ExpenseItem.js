//! KEY CONCEPT: If you have data that might change AND where changes to that data should be reflected on the UI, THEN YOU NEED STATE!
//! - when state changes the component will check to see if it needs to rerender or not - and ONLY that component, the one where the state was registered
import { useState } from 'react'
// changes to state result in this function being called again
// just changing a let variable isn't going to do that
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem({ expense: { title: theTitle, amount, date } }) {
  // useState can only be called inside a functional component
  // useState registers state for A SPECIFIC COMPONENT INSTANCE
  // - so each copy gets its own seperate state
  //!-- it's on a per component instance basis
  const [title, setTitle] = useState(theTitle)
  //! also: react keeps trackif when we call useState in a given instance for the first time
  // - for the first time it'll take the initial value
  // - following times it'll do what it's told and WILL NOT REINITIALIZE the state
  //! tldr; default value is the value the first time around
  console.log('expenseItem evaluated by React')

  const handleClick = () => {
    //! nope! setState((state => setTitle({title: !title})))
    // manipulating state will render this component again
    setTitle('👻')
    // doesn't change state right away, rather schedules it to be updated, so you won't see the new value log out the updated value
    console.log(title)
  }
  // but by the time this component is called again it will render with the current value
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>change title</button>
    </Card>
  )
}

export default ExpenseItem
