import { useEffect, useState } from 'react'

function Select(props) {
  const [value, setValue] = useState(props.value || '')

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return (
    <select
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value)
        props.handleChange(e)
        props.onChange && props.onChange(e)
      }}
      value={value}
      className={props.className}
    >
      {!value && (
        <option value="" disabled hidden>
          {props.placeholder}
        </option>
      )}
      {props.options?.map((option) => (
        <option value={option.code} key={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
