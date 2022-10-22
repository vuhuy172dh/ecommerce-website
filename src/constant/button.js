export const colors = {
  white: {
    default: 'text-dark_primary bg-white hover:bg-light_grey',
    disabled: 'text-dark_primary bg-white opacity-50'
  },
  ghost: {
    default: 'bg-transparent text-dark_primary hover:bg-border_grey',
    disabled: 'bg-transparent text-dark_primary opacity-50'
  },
  secondary: {
    default: 'bg-light_grey text-dark_primary hover:bg-border_grey',
    disabled: 'bg-light_grey text-dark_primary opacity-50'
  },
  primary: {
    default: 'bg-dark_primary text-white hover:bg-[#1e193e]',
    disabled: 'bg-dark_primary text-white opacity-50'
  },
  opaque: {
    default:
      'bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.3)] text-white',
    disabled: 'bg-[rgba(249,249,249,0.15)] text-white opacity-50'
  },
  red: {
    default: 'bg-transparent border border-red-500 rounded-lg text-red-500'
  }
}

export const sizes = {
  medium: 'py-4 px-8',
  small: 'py-3 px-6'
}
