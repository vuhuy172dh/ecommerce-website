import Icon from '../helper/icon'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function InfoItem({ icon, label, desc }) {
  // this is function to get width of infoItem component
  const ref = useRef(null)
  const [endX, setEndX] = useState(0)
  useEffect(() => {
    const handleInnerWidth = () => {
      setEndX(ref.current.offsetWidth - 72)
    }
    handleInnerWidth()
    window.addEventListener('resize', handleInnerWidth)

    return () => window.removeEventListener('resize', handleInnerWidth)
  })

  // this is hover
  const [hover, setHover] = useState(false)

  return (
    <div
      className="px-6 py-9 bg-border_grey mt-6 col-span-4 tablet:col-span-3 laptop:col-span-3 laptop:mt-0 rounded-xl shadow-lg shadow-gray-600/50"
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="w-fit"
        initial={false}
        animate={
          hover
            ? { x: [0, endX / 2, endX], rotateY: [0, 0, 0] }
            : { x: [endX, 0], rotateY: [-180, -180] }
        }
        transition={{
          duration: 2,
          times: [0, 0.7, 1]
        }}
      >
        <Icon icon={icon} />
      </motion.div>
      <h4 className="text-h4 mt-4 mb-3">{label}</h4>
      <p className="text-body-sm">{desc}</p>
    </div>
  )
}

export default InfoItem
