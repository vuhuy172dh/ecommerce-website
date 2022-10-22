import { motion } from 'framer-motion'

const avion_list = ['A', 'V', 'I', 'O', 'N']

function PagePreloader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-border_dark/70 dark:bg-secondary/70 backdrop-blur-lg z-[200] flex justify-center items-center">
      {avion_list.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            fontWeight: 200
          }}
          animate={{
            opacity: [1, 0],
            fontWeight: [600, 600],
            color: '#002366',
            borderColor: ['#cac6da', '#002366'],
            transition: {
              duration: 0.2 * 4,
              delay: 0.1 * index,
              type: 'spring',
              repeat: Infinity
            }
          }}
          className="text-[50px]"
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}

export default PagePreloader
