import BankCard from "../components/Cardview";
import EventCard from "../components/Listings";
import InfoCard from "../components/ViewInfo";
import PieChart from "../components/Charts";
import chart from "../assets/image.png";
import { BankInfo, Events } from "../data/Data";

const Home = () => {
  return (
    <div className="w-full font-apercupro bg-[#F7F8FA] px-4 mb-10">
      <h1 className="text-2xl font-apercupro font-bold mx-[42px] pt-5">
        Welcome, Johan Paul
      </h1>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/3 ml-9">
          <PieChart />
        </div>
        <div className="w-[800px] h-[360px]  bg-white shadow-md rounded-sm mx-1  p-8">
          <h1 className="text-md font-bold text-[#1A1B1E]">
            FD Maturity Timeline
          </h1>
          <img src={chart} alt="year chart" className="w-full mt-12" />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-2/3 h-[200px] flex flex-wrap bg-[#F7F8FA] px-10 py-4">
          {BankInfo.map((bank, index) => (
            <BankCard
              key={index}
              bankName={bank.name}
              logo={bank.logo}
              benefits={bank.benfits}
              color={bank.color}
              cardColor={bank.cardColor}
              badgeColor={bank.badgeColor}
              interestRate={bank.interestRate}
            />
          ))}
          <div className="w-full  font-apercupro">
            <div className="flex justify-between items-center my-5 mx-3">
              <div className="text-[#1A1B1E]">
                <h1 className=" text-2xl font-medium">Get Answer</h1>
                <h2 className="text-base font-bold">to all your questions</h2>
              </div>
              <div className="flex gap-3">
                <div>
                  <svg
                    className="w-7"
                    fill="#000000"
                    fillOpacity="0.2"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 100 100"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657
    c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824
    c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723
    C33.234,53.39,33.446,54.017,33.934,54.458z"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    className="w-7 rotate-180"
                    fill="#000000"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 100 100"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657
    c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824
    c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723
    C33.234,53.39,33.446,54.017,33.934,54.458z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
          </div>
        </div>

        <div className="w-1/3 mt-6">
          {Events.map((event, index) => (
            <EventCard
              key={index}
              type={event.event_type}
              action={event.event_action}
              fdPlan={event.fd_plan}
              calendarDate={event.calendar_date}
              depositAmount={event.deposit_amount}
              tenureYears={event.tenure_years}
              interestRate={event.interest_rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
