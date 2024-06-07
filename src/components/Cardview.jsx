const BankCard = ({ bankName ,logo,benefits,color,cardColor,badgeColor,interestRate}) => {
  return (
    <div className={`${cardColor} w-[48%] m-2 font-apercupro border-white border-4 p-4`}>
      <div className="flex items-center gap-5">
        <img src={logo} alt="bank logo" />
        <h3 className="text-base font-apercupro font-bold">
          {bankName}
        </h3>
      </div>
      <div className="my-5 flex gap-3">
      {benefits.map((item,index)=>(
              <div key={index} className={`${badgeColor} flex gap-2 px-2 items-center w-fit rounded-[5px]`}>
            
            <div>
            <svg
              className={`${color} w-3 rounded-full`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <h4>{item}</h4></div>))}
        
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <h5 className="text-black/60">Interest Upto</h5>
          <h5 className="bold">{interestRate}% p.a.</h5>
        </div>
        <button className={`${color} text-white text-base font-medium px-7 py-3 rounded-[5px] drop-shadow-md`}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BankCard;
