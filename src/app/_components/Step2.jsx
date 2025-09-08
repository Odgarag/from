'use client'
import Image from 'next/image'

import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Inputs } from './Inputs'

export const Step2 = ({
  nextStep,
  prevStep,
  arr,
  length,
  check,
  errors,
  form,
}) => {
  const inputsNames = [
    {
      title: 'Email',
      placeholder: 'Your email',
      type: 'email',
      name: 'email',
      value: form.email,
    },
    {
      title: 'Phone number',
      placeholder: 'Your phone number',
      type: 'text',
      name: 'phoneNumber',
      value: form.phoneNumber,
    },
    {
      title: 'Password',
      placeholder: 'Your password',
      type: 'password',
      name: 'password',
      value: form.password,
    },
    {
      title: 'Confirm password',
      placeholder: 'Your confirm password',
      type: 'password',
      name: 'confirmPassword',
      value: form.confirmPassword,
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
            )}{' '}
          </div>
          <div className="flex gap-6 relative top-[160px]">
            <button
              onClick={prevStep}
              className="flex items-center justify-center w-[128px] h-[44px] bg-gray-100 text-gray-950 rounded-[6px] border border-gray-400"
            >
              <ChevronLeft />
              Back
            </button>
            <button
              onClick={() => nextStep(2)}
              className="flex items-center justify-center w-[280px] h-[44px] bg-gray-950 text-gray-100 rounded-[6px]"
            >
              Continue {length + 1} / {arr.length - 1} <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
