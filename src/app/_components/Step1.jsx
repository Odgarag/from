'use client'
import Image from 'next/image'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronRight, Search } from 'lucide-react'
import { Inputs } from './Inputs'

export const Step1 = ({ nextStep, arr, length, check, errors, form }) => {
  const inputsNames = [
    {
      title: 'First name ',
      placeholder: 'Your first name',
      type: 'text',
      name: 'firstName',
      value: form.firstName,
    },
    {
      title: 'Last name',
      placeholder: 'Your last name',
      type: 'text',
      name: 'lastName',
      value: form.lastName,
    },
    {
      title: 'Username',
      placeholder: 'Your username',
      type: 'text',
      name: 'userName',
      value: form.userName,
    },
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[480px] h-[655px] flex flex-col items-start rounded-xl bg-white px-6 py-8 shadow-lg mt-10">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <p className="text-[26px] font-bold">Join Us! 😎</p>
          <p className="text-gray-400 text-lg">
            Please provide all current information accurately.
          </p>
          <div className="w-[416px] h-[228px] flex flex-col gap-[12px] mt-[28px] ">
            {inputsNames.map(
              ({ placeholder, title, type, name, value }, index) => {
                return (
                  <div key={index}>
                    <Inputs
                      title={title}
                      names={placeholder}
                      type={type}
                      name={name}
                      check={check}
                      value={value}
                    />
                    <p className="text-red-500 text-xs">{errors[name]}</p>
                  </div>
                )
              }
            )}
          </div>
          <div className="relative top-[160px]">
            <button
              onClick={() => nextStep(1)}
              className="flex items-center justify-center w-[416px] h-[44px] bg-gray-950 text-gray-100 rounded-[6px]"
            >
              Continue {length + 1}/ {arr.length - 1}
              <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
