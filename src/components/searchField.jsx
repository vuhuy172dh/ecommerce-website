import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

/*
SearchField: a component to search product. This component has an effect when clicking the icon

Properties: 
- Direction: ltr | rtl (default: rtl) (determine the direction of the component to stretch text field)
*/

const directions = {
  ltr: ['origin-left scale-x-100', 'origin-left scale-x-0', 'left-1', 'left-1'],
  rtl: [
    'origin-[0%_50%] scale-x-100',
    'origin-[100%_50%] scale-x-0',
    'left-1 transition-[left]',
    'left-[calc(100%-24px)] transition-[left]'
  ]
}

function SearchField({ Direction = 'rtl' }) {
  const [search, setSearch] = useState(false)

  const handleSearch = () => {
    setSearch(!search)
  }
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faSearch}
        className={`absolute top-1/2 -translate-y-1/2 cursor-pointer  duration-500 ${
          search ? directions[Direction][2] : directions[Direction][3]
        } z-20`}
        onClick={handleSearch}
      />
      <input
        className={`w-full border border-border_dark rounded-full pl-6 transition-all duration-500 relative z-10 ${
          search ? directions[Direction][0] : directions[Direction][1]
        }`}
        placeholder="search..."
      />
    </div>
  )
}

export default SearchField
