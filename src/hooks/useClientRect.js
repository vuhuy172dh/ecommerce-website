import { useCallback, useState } from 'react'

function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback((node) => {
    const getBounding = () => {
      if (node !== null) {
        setRect(node.getBoundingClientRect())
      }
    }
    getBounding()

    window.addEventListener('resize', getBounding)
  }, [])
  return { rect, ref }
}

export default useClientRect
