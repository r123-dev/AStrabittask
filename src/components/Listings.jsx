const EventCard = ({
  type,
  action,
  fdPlan,
  calendarDate,
  depositAmount,
  tenureYears,
  interestRate,
}) => {
  return (
    <div className="border bg-white rounded w-full shadow p-4">
      <h1 className="text-[#1A1B1E] text-lg font-bold my-2">{type}</h1>
      {/*Middle Container */}
      <div className="flex gap-4">
        <div>
          <h2 className="mb-2 text-sm text-gray-400 block">{action} </h2>
          <div>
            <div className="bg-gray-100 pt-2 px-5 text-4xl font-bold">
              {calendarDate}
            </div>
            <div className="bg-[#CE5151] px-3 text-sm">Oct, 2023</div>
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold">{fdPlan}</h3>
          <div className="flex items-center gap-4">
            <div className="mx-1 pt-2">
              <h4 className=" text-gray-400">Deposited Amt</h4>
              <h5 className="pt-2 text-[#1A1B1E] font-bold">{depositAmount}</h5>
            </div>
            <div className="pt-2">
              <h4 className="text-gray-400">Tenure</h4>
              <h5 className="pt-2 text-[#1A1B1E] font-bold">{tenureYears}</h5>
            </div>
            <div className="pt-2">
              <h4 className="text-gray-400"> Interest Rate</h4>
              <h5 className="pt-2 text-[#1A1B1E] font-bold">{interestRate}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-7 justify-between">
        <button className="bg-[#3B39D9] rounded-md py-2 px-8">
          Completed Now
        </button>
        <button className="border border-[#3B39D9] rounded-md py-2 px-8">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default EventCard;
