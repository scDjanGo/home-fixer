import FooterLabel from "../../UI/footer/FooterLabel";
import FooterSkrep from "./../../UI/footer/FooterSkrep";

export default function Footer() {
  const arr = [
    {
      labelText: "Ваше имя",
      placeholder: "Иван Иванов",
      type: "text",
      name: "name",
    },
    {
      labelText: "Телефон / E-mail",
      placeholder: "example@example.com",
      type: "email",
      name: "email",
    },
    {
      labelText: "Ваше сообщение",
      placeholder: "Текст обращения",
      type: "text",
      name: "commit",
    },
  ];

  return (
    <div className="px-[15px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative max-w-[1100px] mx-auto">
          <span className="w-10 h-[1px] bg-[#222222] absolute top-[50%] left-[-80px] 1240:left-[90%]" />
          <h4 className="text-[32px] font-[800] text-[#222222] 1040:text-[16px]">
            Связаться
            <span className="stroke-black text-transparent"> выполненных </span>
            с нами
          </h4>
        </div>

        <div className="flex gap-[25px] items-start justify-between flex-wrap mb-[135px]">
          <div>
            <div>
              <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
                Офис
              </h4>
              <p className="montserrat text-[13px font-[400] text-[#222222]">
                Москва, ул. Уличная, д. 1, оф. 1
              </p>
            </div>
            <div>
              <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
                E-mail
              </h4>
              <p className="montserrat text-[13px font-[400] text-[#222222]">
                company@company.ru
              </p>
            </div>
            <div>
              <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
                E-mail
              </h4>
              <div className="flex gap-[10px]">
                <div className="rounded-[2px] bg-[#222222] w-[30px] h-[30px]" />
                <div className="rounded-[2px] bg-[#222222] w-[30px] h-[30px]" />
                <div className="rounded-[2px] bg-[#222222] w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
                Режим работы
              </h4>
              <p className="montserrat text-[13px font-[400] text-[#222222]">
                Пн-Вт: 1000 — 1900; Сб-Вс: 1000 — 1500
              </p>
            </div>
            <div>
              <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
                Телефон
              </h4>
              <p className="montserrat text-[13px font-[400] text-[#222222]">
                8 (800) 900-00-00
              </p>
            </div>
          </div>
          <div>
            <h4 className=" text-[14px font-[800] text-[#222222] mb-[8px] mt-[48px]">
              Остались вопросы?
            </h4>
            <form className="flex flex-col gap-[20px] m-[15px_0_28px]">
              {arr.map((item, index) => (
                <div key={index} className="relative">
                  <FooterLabel
                    labelText={item.labelText}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type}
                  />

                  {index - 1 === arr.length && (
                    <div className="absolute z-10 bottom-[6px] right-0">
                      <FooterSkrep />
                    </div>
                  )}
                </div>
              ))}
            </form>

            <p className="text-[#909090] montserrat text-[9px] font-[500] max-w-[360px]">
              Нажимая на кнопку «Получить консультацию», вы соглашаетесь <br />{" "}
              на{" "}
              <span className="text-[#222222] border-b-[1px] border-[dashed] border-[#222222] cursor-pointer">
                обработку персональных данных
              </span>
            </p>

            <button
              className={`relative z-[10] text-[14px] 795:text-[10px] 795:p-[5px_12px] mt-[33px] 795:mt-[36px] font-[800]  border-[1px] ${"text-[#222222] border-[#2222224D]"}  p-[10px_48px] duration-300  hover:bg-[rgb(0,0,0,0.05)]`}
            >
              <span
                className={`absolute left-[-5%] ${"bg-[#222222]"} top-[50%] h-[1px] w-[24.4px] 795:w-[12px]`}
              />
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto  mb-[24px]">
        <div className="bg-[#222222] h-[1.5px] w-full" />
        <div className="flex 595:flex-wrap gap-[15px_25px] items-center justify-between">
          <h3 className="text-[14px] font-[800] text-[#222222] mt-[24.5px] cursor-pointer">
            © 2022 Сompany.{" "}
            <span className="  montserrat text-[13px] font-[400] cursor-default">
              {" "}
              Соглашение об обработке персональных данных и политика
              конфиденциальности
            </span>
          </h3>
          <h3 className=" montserrat text-[13px] font-[400] cursor-default text-[#222222]">
            Сделано в <span className="text-[14px] font-[800] text-[#222222] mt-[24.5px] cursor-pointer">Palladiumlab</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
