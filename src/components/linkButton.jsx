import { Link } from 'react-router-dom'

/*
Name: LinkButton
Description: used to link to a page. This LinkButton has the effect that draws an underline
Properties:
  children
  path: string (default: '/')
  size: 'small' | 'large' (default: 'small')
*/

const sizes = {
  small: 'px-2',
  large: 'px-4'
}

const colors = {
  light: 'text-light_grey after:bg-light_grey',
  dark: 'text-dark_primary after:bg-dark_primary'
}

function LinkButton({
  children,
  path = '/',
  size = 'small',
  color = 'light',
  onClick
}) {
  return (
    <Link to={path}>
      <div
        className={`min-w-fit h-full flex-1 ${sizes[size]} flex items-center relative after:block after:h-[2px] after:w-full ${colors[color]} after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-top-right after:transition-transform after:duration-300 after:ease-linear hover:after:scale-x-100 hover:scale-y-100 hover:after:origin-bottom-left`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  )
}

export default LinkButton
