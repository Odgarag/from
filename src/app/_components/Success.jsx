'use client'
import Image from 'next/image'

import { AnimatePresence, motion } from 'motion/react'

export const Success = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[480px] h-[193px] flex flex-col items-start rounded-xl bg-white px-6 py-8 shadow-lg mt-10">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <p className="text-[26px] font-bold">You're All Set! 🔥</p>
          <p className="text-gray-400 text-lg">
            We've received your submission. Thank you!
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
