# react user login app

## useEffect()

- We're going to use useEffect to set our user to local storage
- useEffect() has 1 main job - **to handle side effects**
  - it's useful from when you need to do something in response to something else happening
  - usually you'll use everything you use in the effect function as a dependency
    - state variables
    - and functions
  - but there are some exceptions... you DON'T NEED...
    - to add state to updating functions, react makes sure those never change
    - to add built in APIs or functions that are built into the browser and global, they're not React
    - to add outside variables or functions you may have defined OUTSIDE of the component
  - so basically
    - use all things you use in your effect function if those things could change bc your component/or parent component rerendered

### Using the useEffect() cleanup function

Runs before every new execution

- many quick changes triggering a function to update state can cause a mess and unnecessary requests
  - so for example, instead of checking on every key stroke, you want to wait for the user to stop typing for x amount of time before you run a check, "debounce"

Hence, clear a timer before you set a new one.
