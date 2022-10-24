import { useWatch } from 'react-hook-form'

const Controller = ({
  control,
  register,
  name,
  render,
  handleChange,
  type,
  radioValue,
  disabled = false,
  placeholder,
  className,
  options
}) => {
  const props = register(name)

  const value = useWatch({
    control,
    name
  })

  return render({
    value: value,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value
        }
      }),
    radioValue,
    onBlur: props.onBlur,
    name: props.name,
    handleChange,
    type,
    placeholder,
    className,
    disabled,
    options
  })
}

export default Controller
