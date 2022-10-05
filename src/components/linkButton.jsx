import { Link } from 'react-router-dom'

const sizes = {
  small: 'px-2',
  large: 'px-4'
}

function LinkButton({ children, path = '/', size = 'small' }) {
  return (
    <Link to={path}>
      <div
        className={`min-w-fit flex-1 ${sizes[size]} flex relative after:block after:h-[1px] after:w-full after:bg-border_dark after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-top-right after:transition-transform after:duration-300 after:ease-linear hover:after:scale-x-100 hover:scale-y-100 hover:after:origin-bottom-left`}
      >
        {children}
      </div>
    </Link>
  )
}

export default LinkButton
