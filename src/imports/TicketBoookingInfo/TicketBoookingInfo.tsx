function Frame() {
  return (
    <div className="absolute bg-[#fff9f9] content-stretch drop-shadow-[0px_-1px_5.4px_rgba(0,0,0,0.25),0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[52px] items-start leading-[normal] left-[15px] px-[10px] py-[3px] rounded-[13px] text-[#1e1e1e] top-[71px] w-[176px]">
      <p className="h-[19px] relative shrink-0 text-[13px] w-[96px]">From:</p>
      <p className="h-[26px] relative shrink-0 text-[16px] w-[128px]">Ghatkopar- GC</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fff9f9] content-stretch drop-shadow-[0px_-1px_5.4px_rgba(0,0,0,0.25),0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[52px] items-start leading-[normal] left-[200px] px-[10px] py-[3px] rounded-[13px] text-[#1e1e1e] top-[71px] w-[176px]">
      <p className="h-[19px] relative shrink-0 text-[13px] w-[96px]">To:</p>
      <p className="h-[26px] relative shrink-0 text-[16px] w-[128px]">Thane-TNA</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="cursor-pointer h-[42px] relative shrink-0 w-[346px]" data-name="button slection">
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_51.73%_0_0] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 3">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">One-way journey</p>
        </button>
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_0_0_51.73%] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 4">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">Return journey</p>
        </button>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[17px] top-[361px] w-[349px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#fe6e1e] text-[16px] w-full">Ticket Type:</p>
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return <div className="h-[42px] shrink-0 w-full" />;
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[17px] top-[448px] w-[349px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#fe6e1e] text-[16px] w-[min-content]">Train Type:</p>
      <div className="cursor-pointer h-[42px] relative shrink-0 w-[346px]" data-name="button slection">
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_51.73%_0_0] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 3">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">Ordinary Train</p>
        </button>
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_0_0_51.73%] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 4">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">AC Train</p>
        </button>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="cursor-pointer h-[42px] relative shrink-0 w-[346px]" data-name="button slection">
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_51.73%_0_0] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 3">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">First Class</p>
        </button>
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_0_0_51.73%] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 4">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">Second Class</p>
        </button>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[17px] top-[535px] w-[349px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#fe6e1e] text-[16px] w-full">Class:</p>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="cursor-pointer h-[60px] relative shrink-0 w-[346px]" data-name="button slection">
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_51.73%_0_0] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 3">
          <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal] mb-0">R-Wallet</p>
            <p className="leading-[normal]">Balance: Rs. 430/-</p>
          </div>
        </button>
        <button className="absolute bg-[#eaeaea] content-stretch flex inset-[0_0_0_51.73%] items-center justify-center py-[11px] rounded-[11px]" data-name="Component 4">
          <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal] mb-0">Other</p>
            <p className="leading-[normal]">(UPI/Netbanking)</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[17px] top-[622px] w-[349px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#fe6e1e] text-[16px] w-full">Payment Type:</p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#ef4163] h-[51px] items-center justify-center left-[15px] px-[84px] py-[11px] rounded-[11px] to-[#f89b3b] to-[99.98%] top-[771px] via-[#f75841] via-[83.173%] w-[346px]">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[97.73999786376953%]">Book Ticket</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#eaeaea] content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[53px] h-[42px] items-center left-[17px] px-[10px] py-[5px] rounded-[11px] top-[719px] w-[344px]">
      <p className="leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-[134px]">Total Fare:</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#fe6e1e] text-[24px] text-center w-[134px]">
        <p className="leading-[97.73999786376953%]">Rs. 50.00/-</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[139px] ml-0 mt-0 rounded-[13px] row-1 shadow-[0px_4px_18.9px_2px_rgba(0,0,0,0.25)] w-[162px]" />
      <div className="bg-white border border-[#bababa] border-solid col-1 h-[36px] ml-[21px] mt-[57px] rounded-bl-[13px] rounded-tl-[13px] row-1 w-[60px]" />
      <div className="col-1 flex h-[36px] items-center justify-center ml-[81px] mt-[57px] relative row-1 w-[60px]">
        <div className="flex-none rotate-180">
          <div className="bg-white border border-[#bababa] border-solid h-[36px] rounded-bl-[13px] rounded-tl-[13px] w-[60px]" />
        </div>
      </div>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[53px] mt-[102px] relative row-1 text-[#1e1e1e] text-[20px] whitespace-nowrap">Adult</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[71px] mt-[12px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">2</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[98px] mt-[53px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">+</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[46px] mt-[52px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">-</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[139px] ml-0 mt-0 rounded-[13px] row-1 shadow-[0px_4px_18.9px_2px_rgba(0,0,0,0.25)] w-[162px]" />
      <div className="bg-white border border-[#bababa] border-solid col-1 h-[36px] ml-[21px] mt-[57px] rounded-bl-[13px] rounded-tl-[13px] row-1 w-[60px]" />
      <div className="col-1 flex h-[36px] items-center justify-center ml-[81px] mt-[57px] relative row-1 w-[60px]">
        <div className="flex-none rotate-180">
          <div className="bg-white border border-[#bababa] border-solid h-[36px] rounded-bl-[13px] rounded-tl-[13px] w-[60px]" />
        </div>
      </div>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[53px] mt-[102px] relative row-1 text-[#1e1e1e] text-[20px] whitespace-nowrap">Child</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[71px] mt-[12px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">0</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[98px] mt-[53px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">+</p>
      <p className="col-1 font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] ml-[46px] mt-[52px] relative row-1 text-[#fe6e1e] text-[36px] whitespace-nowrap">-</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center leading-[0] left-[22px] top-[193px]">
      <Group />
      <Group1 />
    </div>
  );
}

export default function TicketBoookingInfo() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(-82.4641deg, rgb(254, 110, 30) 22.073%, rgb(248, 155, 59) 93.368%)" }} data-name="ticket boooking info">
      <div className="absolute bg-white h-[709px] left-0 rounded-tl-[68px] rounded-tr-[68px] shadow-[10px_10px_12.4px_14px_rgba(0,0,0,0.25)] top-[135px] w-[390px]" />
      <div className="absolute bg-white h-[709px] left-0 rounded-tl-[68px] rounded-tr-[68px] shadow-[10px_10px_12.4px_14px_rgba(0,0,0,0.25)] top-[135px] w-[390px]" />
      <Frame />
      <Frame1 />
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] left-[82px] text-[#fe6e1e] text-[20px] top-[152px] whitespace-nowrap">Ticket Booking Details</p>
      <div className="absolute left-[16px] size-[50px] top-[11px]">
        <div className="absolute inset-[-18.6%_-26.6%_-34.6%_-26.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6 76.6">
            <g filter="url(#filter0_d_18_129)" id="Ellipse 2">
              <circle cx="38.3" cy="34.3" fill="var(--fill-0, white)" r="25" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76.6" id="filter0_d_18_129" width="76.6" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="6.65" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_129" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_129" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[37px] left-[20px] overflow-clip top-[17px] w-[39px]" data-name="Chevron left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-6.76%_-12.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 21">
              <path d="M11 19.75L1.25 10.5L11 1.25" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame4 />
      <Frame5 />
      <Frame7 />
      <Frame9 />
      <Frame11 />
      <Frame12 />
      <div className="absolute flex h-[51px] items-center justify-center left-[381px] top-[298px] w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#f89b3b] h-[4px] rounded-[6px] w-[51px]" />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}