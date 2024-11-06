
export default function FooterLabel({labelText, placeholder, type, name}) {
  return (
    <label htmlFor={name} className="text-[9px] font-[500] montserrat flex flex-col w-full border-b-[1px] border-[#EBEBEB] pb-[3px] relative max-w-[360px]">
        {labelText}
        <input className="border-none focus:outline-none text-[13px] font-[400] montserrat" id={name} name={name} type={type} placeholder={placeholder} />
    </label>
  )
}
