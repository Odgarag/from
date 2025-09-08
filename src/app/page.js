'use client'
import { useState } from 'react'
import { Step1 } from './_components/Step1'
import { Step2 } from './_components/Step2'
import { Step3 } from './_components/Step3'
import { Success } from './_components/Success'
import { parseISO, differenceInYears } from 'date-fns'

export default function Home() {
  const arr = [Step1, Step2, Step3, Success]
  const [index, setIndex] = useState(0)

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [userName, setUserName] = useState('')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    date: '',
    profile: '',
  })
  const [errors, setErrors] = useState({})

  const validateForm = (hed, data) => {
    const errors = {}
    if (hed === 1) {
      if (!data.firstName.trim()) {
        errors.firstName = 'Өөрийн нэрээ оруулна уу'
      } else if (data.firstName.length < 2) {
        errors.firstName = 'Өөрийн нэр багадаа 2 үсэг агуулна'
      }
      if (!data.lastName.trim()) {
        errors.lastName = 'Өөрийн овгийг оруулна уу'
      } else if (data.lastName.length < 2) {
        errors.lastName = 'Өөрийн овог багадаа 2 үсэг агуулна'
      }
      if (!data.userName.trim()) {
        errors.userName = 'Өөрийн хочоо оруулна уу'
      } else if (data.userName.length < 2) {
        errors.userName = 'Өөрийн хоч багадаа 2 үсэг агуулна'
      }
    } else if (hed === 2) {
      if (!data.email.trim()) {
        errors.email = 'Email-ээ оруулна уу'
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email буруу байна'
      }
      if (!data.phoneNumber.trim()) {
        errors.phoneNumber = 'Утасны дугаараа оруулна уу'
      } else if (data.phoneNumber.length < 8) {
        errors.phoneNumber = 'Утасны дугаар буруу байна'
      }

      if (!data.password) {
        errors.password = 'Нууц үгээ оруулна уу'
      } else if (data.password.length < 4) {
        errors.password = 'Нууц үг багадаа 4 үсэгнээс бүрдэнэ'
      }

      if (data.confirmPassword !== data.password) {
        errors.confirmPassword = 'Нууц үг таарахгүй байна'
      }
    } else if (hed === 3) {
      if (!data.date) {
        errors.date = 'Төрсөн огноог оруулна уу'
      } else {
        const birthDate = parseISO(data.date)
        const today = new Date()
        const age = differenceInYears(today, birthDate)

        if (age < 18) {
          errors.date = 'Та 18 нас хүрсэн байх ёстой'
        }
      }
      if (!data.profile || data.profile[0] === undefined) {
        errors.profile = 'Зураг оруулна уу'
      }
    }
    return errors
  }
  console.log(errors)

  // const check = (event) => {
  //   if (event.target.name === 'firstName') {
  //     setFirstName(event.target.value)
  //   } else if (event.target.name === 'lastName') {
  //     setLastName(event.target.value)
  //   } else if (event.target.name === 'userName') {
  //     setUserName(event.target.value)
  //   }
  // }
  // console.log(firstName, lastName, userName)

  const check = (event) => {
    if (event.target.name === 'firstName') {
      setForm((prev) => {
        return { ...prev, firstName: event.target.value }
      })
      setErrors((prev) => ({ ...prev, firstName: '' }))
    } else if (event.target.name === 'lastName') {
      setForm((prev) => {
        return { ...prev, lastName: event.target.value }
      })
      setErrors((prev) => ({ ...prev, lastName: '' }))
    } else if (event.target.name === 'userName') {
      setForm((prev) => {
        return { ...prev, userName: event.target.value }
      })
      setErrors((prev) => ({ ...prev, userName: '' }))
    } else if (event.target.name === 'email') {
      setForm((prev) => {
        return { ...prev, email: event.target.value }
      })
      setErrors((prev) => ({ ...prev, email: '' }))
    } else if (event.target.name === 'phoneNumber') {
      setForm((prev) => {
        return { ...prev, phoneNumber: event.target.value }
      })
      setErrors((prev) => ({ ...prev, phoneNumber: '' }))
    } else if (event.target.name === 'password') {
      setForm((prev) => {
        return { ...prev, password: event.target.value }
      })
      setErrors((prev) => ({ ...prev, password: '' }))
    } else if (event.target.name === 'confirmPassword') {
      setForm((prev) => {
        return { ...prev, confirmPassword: event.target.value }
      })
      setErrors((prev) => ({ ...prev, confirmPassword: '' }))
    } else if (event.target.name === 'date') {
      setForm((prev) => {
        return { ...prev, date: event.target.value }
      })
      setErrors((prev) => ({ ...prev, date: '' }))
    } else if (event.target.name === 'profile') {
      setForm((prev) => {
        return { ...prev, profile: event.target.value }
      })
      setErrors((prev) => ({ ...prev, profile: '' }))
    }
  }

  const Stepper = arr[index]

  const nextStep = (hed) => {
    const newErrors = validateForm(hed, form)

    setErrors((prev) => {
      return { ...prev, ...newErrors }
    })

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      setIndex((prev) => prev + 1)
    } else {
    }
  }
  const prevStep = () => {
    setIndex((prev) => prev - 1)
  }

  return (
    <div>
      {/* {JSON.stringify(form)} */}
      <Stepper
        nextStep={nextStep}
        prevStep={prevStep}
        arr={arr}
        length={index}
        errors={errors}
        check={check}
        validateForm={validateForm}
        form={form}
        setErrors={setErrors}
        setForm={setForm}
      />
    </div>
  )
}
