// import React, { useState } from 'react'
//! 2way binding -> a controlled component
// - a value that's used in a component
// - is passed on to a parent component through props and is received from the parent component.
//! - bot the currently set value and the function used to manupulate it are not part of the child component
// - so this would just be a presentational component
// - the real logic resides in the parent component, and there ExpensesFilter becomes what is called a controlled component, where the value and changes to the value are not handled in the component itself, but the parent

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    // console.log(e.target.value)
    props.onChangeFilter(e.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* <select onChange={props.onFilterYear}> */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
