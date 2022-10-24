const RadioInput = (props) => {
  return (
    <input
      name={props.name}
      onChange={(e) => {
        props.handleChange(e)
        props.onChange && props.onChange(e)
      }}
      value={props.radioValue}
      checked={props.radioValue === props.value}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}

export default RadioInput
