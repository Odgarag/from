export const Inputs = ({ names, title, type, check, name, value }) => {
  return (
    <div className="flex flex-col gap-[8px] ">
      <div className="flex">
        <p>{title}</p>
        <p className="text-red-500">*</p>
      </div>
      <input
        name={name}
        onChange={check}
        type={type}
        placeholder={names}
        value={value}
        className="h-[44px] w-[416px] rounded-[8px] border-2 border-gray-300 px-[13px]"
      />
    </div>
  )
}
