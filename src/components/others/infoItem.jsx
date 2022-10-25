import { motion } from 'framer-motion'
import { useState } from 'react'

import Icon from '../../helper/icon'
import useClientRect from '../../hooks/useClientRect'

function InfoItem({ icon, label, desc }) {
  //use useClientRect to get width of element
  const { rect: infoRect, ref: infoRef } = useClientRect()

  // this is hover
  const [hover, setHover] = useState(false)

  return (
    <div
      className="px-6 py-9 bg-border_grey dark:bg-secondary mt-6 col-span-4 tablet:col-span-3 laptop:col-span-3 laptop:mt-0 rounded-xl shadow-lg shadow-gray-600/50 dark:shadow-light_grey/20 dark:text-light_grey"
      ref={infoRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="w-fit"
        initial={false}
        animate={
          hover
            ? {
                x: [0, infoRect?.width / 2, infoRect?.width - 72],
                rotateY: [0, 0, 0]
              }
            : { x: [infoRect?.width - 72, 0], rotateY: [-180, -180] }
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
