function Frame() {
  return (
    <div className="absolute bg-[#ff9f45] content-stretch drop-shadow-[0px_-4px_7.65px_rgba(0,0,0,0.25)] flex h-[51px] items-center justify-center left-[24px] px-[84px] py-[11px] rounded-[11px] top-[194px] w-[346px]">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[97.73999786376953%]">Your Ticket</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-center leading-[0] left-[67px] text-center text-white top-[86px] w-[256px]">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[28px] w-[241px]">
        <p className="leading-[0.9]">Ticket Booked Successfully</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[14px] justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[97.73999786376953%]">Happy Journey!</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start mr-[-34px] relative shrink-0 w-[330px]">
      <p className="relative shrink-0 w-full">Total GST: Rs. 3.10/-</p>
      <p className="relative shrink-0 w-full">Paperless Ticket</p>
      <p className="relative shrink-0 w-full">Journey should commence within 1 hour</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] font-normal items-center pr-[34px] relative shrink-0 w-full">
      <Frame9 />
      <p className="mr-[-34px] relative shrink-0 whitespace-pre">{`20  KM`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[20px] text-[#1e1e1e] text-[16px] top-[651px] w-[351px]">
      <Frame10 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 w-full">No printout required.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start leading-[normal] left-[13px] text-white top-[11px] w-[155px]">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[13px] w-[min-content]">From:</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 text-[13px] whitespace-nowrap">घाटकोपर</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]">Ghatkopar- GC</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 text-[13px] whitespace-nowrap">घाटकोपर</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="drop-shadow-[0px_-1px_5.4px_rgba(0,0,0,0.25),0px_4px_2px_rgba(0,0,0,0.25)] h-[97px] relative rounded-[13px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(92.9525deg, rgb(0, 114, 220) 20.002%, rgb(0, 200, 255) 98.618%)" }}>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[14px] top-[362px] w-[176px]">
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start leading-[normal] left-[13px] text-white top-[11px] w-[155px]">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[13px] w-[min-content]">To:</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 text-[13px] whitespace-nowrap">ठाणे</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]">Thane-TNA</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 text-[13px] whitespace-nowrap">ठाणे</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="drop-shadow-[0px_-1px_5.4px_rgba(0,0,0,0.25),0px_4px_2px_rgba(0,0,0,0.25)] h-[97px] relative rounded-[13px] shrink-0 w-[176px]" style={{ backgroundImage: "linear-gradient(92.9525deg, rgb(0, 114, 220) 20.002%, rgb(0, 200, 255) 98.618%)" }}>
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[200px] top-[362px]">
      <Frame2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[76px]">
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 w-full">प्रथम</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 w-full">First (FC)</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] font-normal relative shrink-0 w-full">प्र श्रे</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[3px] items-start relative shrink-0 w-[153px]">
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] relative shrink-0 w-full">साधारण</p>
      <p className="font-['Montserrat:Regular',sans-serif] relative shrink-0 w-full">Ordinary Train (O)</p>
      <p className="font-['Montserrat:Regular','Noto_Sans_Devanagari:Regular',sans-serif] relative shrink-0 w-full">साधारण</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-between leading-[normal] left-[24px] text-[#1e1e1e] text-[16px] top-[526px] w-[350px]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ef4163] h-[51px] items-center justify-center left-[20px] px-[84px] py-[11px] rounded-[11px] to-[#f89b3b] to-[99.98%] top-[769px] via-[#f75841] via-[83.173%] w-[346px]">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[97.73999786376953%]">Go to Home</p>
      </div>
    </div>
  );
}

export default function FinalTicket() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(-82.4641deg, rgb(254, 110, 30) 22.073%, rgb(248, 155, 59) 93.368%)" }} data-name="final ticket">
      <div className="absolute bg-white h-[624px] left-0 rounded-tl-[68px] rounded-tr-[68px] shadow-[10px_10px_12.4px_14px_rgba(0,0,0,0.25)] top-[220px] w-[390px]" />
      <Frame />
      <Frame3 />
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] left-[25px] text-[#1e1e1e] text-[16px] top-[278px] w-[134px]">One Way Journey (J)</p>
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] left-[278px] text-[#1e1e1e] text-[16px] top-[278px] whitespace-nowrap">Rs. 50.00/-</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[180px] text-[#1e1e1e] text-[16px] top-[302px] w-[196px]">UTS NO.: XXXXXXXXXXX</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[18px] text-[#1e1e1e] text-[16px] top-[492px] w-[196px] whitespace-pre-wrap">{`Adult: 2    Child:0`}</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[20px] text-[#1e1e1e] text-[16px] top-[610px] w-[290px] whitespace-pre-wrap">{`SAC: XXXXXX    IR:XXXXXXX`}</p>
      <Frame11 />
      <Frame4 />
      <Frame6 />
      <div className="absolute h-0 left-[18px] top-[341px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[18px] top-[481px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[18px] top-[522px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[18px] top-[601px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[18px] top-[639px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[18px] top-[680px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[20px] top-[717px] w-[354.023px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354.023 1">
            <line id="Line 22" stroke="var(--stroke-0, #A8A5A5)" x2="354.023" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#ff9f45] h-[30px] left-[17px] rounded-[9px] top-[547px] w-[108px]" />
      <Frame8 />
      <Frame14 />
    </div>
  );
}