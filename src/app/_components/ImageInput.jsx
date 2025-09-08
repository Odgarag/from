'use client'

import { Image } from 'lucide-react'
import { useState } from 'react'

export const ImageInput = ({ value, setForm }) => {
  const [file, setFile] = useState(value || null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    const fileURL = URL.createObjectURL(selectedFile)
    setFile(fileURL)

    setForm((prev) => ({ ...prev, profileImage: selectedFile }))
  }

  const handleRemove = () => {
    setFile(null)
    setForm((prev) => ({ ...prev, profileImage: null }))
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium flex items-center gap-1">
        Profile image <span className="text-red-500">*</span>
      </label>

      <div className="border-2 border-gray-300 bg-gray-100 flex justify-center items-center rounded-md h-[180px] w-full relative overflow-hidden">
        {!file ? (
          <label
            htmlFor="input-file"
            className="flex flex-col items-center cursor-pointer text-center text-gray-700"
          >
            <Image />
            <p className="font-medium">Browse or Drop Image</p>
            <input
              id="input-file"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={file}
              alt="Uploaded Preview"
              className="object-cover w-full h-full"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center"
              title="Remove Image"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
