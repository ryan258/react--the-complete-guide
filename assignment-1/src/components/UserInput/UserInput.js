const UserInput = (props) => {
  const inputStyle = {
    border: "2px solid blue"
  }

  return (
    <>
      <input style={inputStyle} type="text" onChange={props.changed} value={props.currentName} />
    </>
  )
}

export default UserInput
