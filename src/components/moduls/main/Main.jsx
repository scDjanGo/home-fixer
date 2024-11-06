export default function Main() {
  return (
    <div className="mt-[136px] px-[170px] 1280:px-[15px]">
      <div className="relative max-w-[1000px] mx-auto">
        <span className="w-10 h-[1px] bg-[#222222] absolute top-[50%] left-[-80px] 1240:left-[90%]" />
        <h4 className="text-[32px] font-[800] text-[#222222] 1040:text-[16px]">
          Примеры
          <span className="stroke-black text-transparent"> выполненных </span>
          работ
        </h4>
      </div>

      <div className="flex flex-col items-center justify-center gap-[10px] max-w-[1000px] w-full mx-auto mt-[48px]">
        <div className="flex gap-[10px] 495:flex-col">
          <div className="flex flex-col gap-[10px]">
            <div className="relative bg-[#00000080]">
              <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                Новостройка
              </p>

              <img src="/img/project1.png" alt="*" />
            </div>
            <div className="flex gap-[10px]">
              <div className="relative bg-[#00000080]">
                <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                  Вторичка
                </p>
                <img src="/img/project2.png" alt="*" />
              </div>
              <div className="relative bg-[#00000080]">
                <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                  Вторичка
                </p>
                <img src="/img/project3.png" alt="*" />
              </div>
            </div>
          </div>
          <div className="relative bg-[#00000080]">
            <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
              Новостройка
            </p>
            <img className="495:object-cover 495:w-full 495:max-h-[150px]" src="/img/project4.png" alt="*" />
          </div>
        </div>
        <div className="flex gap-[10px] 495:flex-col">
          <div className="relative bg-[#00000080]">
            <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
              Новостройка
            </p>
            <img className="495:w-full 495:max-h-[150px]" src="/img/project5.png" alt="*" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="relative bg-[#00000080]">
                <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                  Вторичка
                </p>
                <img src="/img/project6.png" alt="*" />
              </div>
              <div className="relative bg-[#00000080]">
                <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                  Вторичка
                </p>
                <img src="/img/project7.png" alt="*" />
              </div>
            </div>
            <div className="relative bg-[#00000080]">
              <p className="text-[20px] 1040:text-[12px] font-[800] text-[#ffffff] absolute top-[32px] 595:top-[16px] left-[32px] 595:left-[16px] 795:top-[16px] 795:left-[16px]">
                Новостройка
              </p>

              <img src="/img/project8.png" alt="*" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] flex items-center justify-center mt-[64px] 795:mt-[32px] mb-[146px] 795:mb-[74px]">
        <button
          className={`relative z-[10] !mx-auto text-[14px] 795:text-[10px] 795:p-[5px_12px] mt-[12px] 795:mt-[36px] font-[800]  border-[1px] ${"text-[#222222] border-[#2222224D]"}  p-[10px_48px] duration-300  hover:bg-[rgb(0,0,0,0.05)]`}
        >
          <span
            className={`absolute left-[-5%] ${"bg-[#222222]"} top-[50%] h-[1px] w-[24.4px] 795:w-[12px]`}
          />{" "}
          Все проекты
        </button>
      </div>
    </div>
  );
}
