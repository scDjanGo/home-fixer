import { useState } from "react"

import HeaderPhone from "../../UI/header/HeaderPhone"
import HeaderMarker from "../../UI/header/HeaderMarker"
import HeaderLogo from "../../UI/header/HeaderLogo"

export default function Header({isHover}) {
    const [sideBar, setSideBar] = useState(false)
  return (
    <div className={`h-[85px] top-0 w-full absolute z-[10] flex items-center justify-between border-b-[1px] border-[${isHover ? "#FFFFFF4D" : "#EBEBEB"}]`}>
        <div className={`p-[34px_33.5px] border-r-[1px] border-[${isHover ? "#FFFFFF4D" : "#EBEBEB"}]  795:hidden`}>
            <HeaderMarker isHover={isHover} />
        </div>

        <div className=" w-full flex items-center justify-between px-[132px] 1240:px-[15px]">
            <ul className="flex items-center gap-[50px] 1240:gap-[20px]  795:hidden">
                <li className={`text-[14px] font-[800] text-[#222222] relative ${isHover ? "text-[#ffffff]" : "text-[#222222]"}`}>Главная <div className={`absolute h-[1.5px] w-full ${isHover ? "bg-[#ffffff]" : "bg-[#222222]"} bottom-[-32px] left-[0]`} /></li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>О компании</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Услуги</li>

            </ul>
            <div className="p-[26.5px_0_28.5px]">
                <HeaderLogo isHover={isHover} />
            </div>
            <ul className="flex items-center gap-[50px] 1240:gap-[20px]  795:hidden">
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Цены</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Портфолио</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Контакты</li>

            </ul>
        </div>

        <div className={`p-[34px_33.5px] border-l-[1px] border-[${isHover ? "#FFFFFF4D" : "#EBEBEB"}]  795:hidden`}>
            <HeaderPhone isHover={isHover} />
        </div>
        
        <div className={`cursor-pointer p-[34px_33.5px] border-l-[1px] border-[${isHover ? "#FFFFFF4D" : "#EBEBEB"}] hidden 795:flex flex-col items-center justify-center gap-[5px]`}>
            <div className={`h-[3px] ${isHover ? "bg-[#ffffff]" : "bg-[#222222]"} w-[30px]`}></div>
            <div className={`h-[3px] ${isHover ? "bg-[#ffffff]" : "bg-[#222222]"} w-[30px]`}></div>
            <div className={`h-[3px] ${isHover ? "bg-[#ffffff]" : "bg-[#222222]"} w-[30px]`}></div>
        </div>
{/* 
        <div className={`absolute w-[100vw] !min-h-[100vh] z-[12] bg-[#ffffff] px-[15px]`}>
            
           <div className="p-[26.5px_0_28.5px] w-full flex items-center justify-center mb-]15px[">
                <HeaderLogo isHover={isHover} />
            </div>

            <ul>
                <li className={`text-[14px] font-[800] text-[#222222]   ${isHover ? "text-[#ffffff]" : "text-[#222222]"}`}>Главная</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>О компании</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Услуги</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Цены</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Портфолио</li>
                <li className={`text-[14px] font-[800] text-[#222222B2] ${isHover ? "text-[#ffffff]" : "text-[#222222B2]"}`}>Контакты</li>
            </ul>
        </div> */}



    </div>
  )
}

