import React from 'react'
import "./src/css/global.css"
import { motion, AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
      <AnimatePresence exitBeforeEnter {...props}>
        <motion.div
          key={element.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    )
  }
  