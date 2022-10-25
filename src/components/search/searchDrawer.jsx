import { useEffect, useRef, useState } from 'react'

import { useSearchMode } from '../../hooks/useSearchMode'
import { searchProducts } from '../../services/search'
import { ProductItemListing } from '../products'

function SearchDrawer() {
  const { mode: searchMode, handleSearchMode } = useSearchMode()
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const searchTimeoutRef = useRef(null)

  //call api
  const onSubmit = async (formValues) => {
    await searchProducts(formValues.searchTerm).then(
      ([listProducts, lastVariable]) => setProducts(listProducts)
    )
  }

  //reset search field and products when change search mode
  useEffect(() => {
    setSearchTerm('')
    setProducts([])
  }, [searchMode])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (!onSubmit) return

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      }
      onSubmit(formValues)
    }, 300)
  }

  return (
    <div
      className={`w-full h-screen fixed bottom-0 ${
        searchMode ? 'visible z-[100]' : 'invisible -z-50'
      } transition-all duration-300`}
    >
      {/*backdrop*/}
      <div
        className="w-full h-screen fixed top-0 left-0 bg-light_grey/50 dark:bg-black/50 backdrop-blur-sm z-10 cursor-pointer"
        onClick={handleSearchMode}
      ></div>

      {/*search container*/}
      <div
        className={`w-full h-[90vh] px-8 py-4 fixed bottom-0 left-0 z-20 bg-white dark:bg-secondary border rounded-t-2xl border-border_dark dark:border-secondary/40 transition-all duration-300 ${
          searchMode
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        } overflow-auto no-scrollbar`}
      >
        {/*search field*/}
        <input
          className="w-full p-2 bg-border_dark/70 dark:bg-dark_secondary/30 border rounded-lg border-primary/30 dark:border-light_grey/30 outline-none"
          placeholder="search...."
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/*list products*/}
        <div className="w-full mt-8">
          <ProductItemListing products={products} />
        </div>
      </div>
    </div>
  )
}

export default SearchDrawer
