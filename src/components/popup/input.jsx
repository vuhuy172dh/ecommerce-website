import { useEffect, useState } from 'react'

const Input = (props) => {
  const [value, setValue] = useState(props.value || '')

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <input
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value)
        props.handleChange(e)
        props.onChange && props.onChange(e)
      }}
      value={value}
      disabled={props.disabled}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}

export default Input
