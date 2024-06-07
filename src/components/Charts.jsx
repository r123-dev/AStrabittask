import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  
  const [chartState, setChartState] = useState({
    series: [25, 20, 15, 40],
    options: {
      chart: {
        width: 500,
        type: 'pie',
      },
      labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
            enabled: true,
            formatter: function (value, { seriesIndex, w }) {
              const percentage = w.globals.seriesPercent[seriesIndex];
              return `${value} (${percentage}%)`;
            },
          },
        },
      },
      colors: ['#6C63FF', '#FA9D17','#B9C606', '#59CBD3'],
    },
  });
  return (
    <div className='bg-white shadow-md rounded-sm m-4 w-fit p-8 '>
    <div className='flex justify-between '>
    <h1 className='text-md font-bold text-[#1A1B1E] pl-10'>Your FD PortFolio</h1>
    <div>
    <button onClick={toggleDropdown} className='border flex border-gray-300 rounded-md py-2 px-4 font-normal text-sm'>Deposit Amt
    <svg className="w-2.5 h-2.5 ms-3 mt-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
</svg>

    </button>
    <div
      id="dropdown"
      className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isDropdownVisible ? '' : 'hidden'}`}
      
    > 
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Saving Account
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Current Account
          </a>
        </li>
      </ul>
    </div>
  </div>

    </div>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="pie" width={500} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default PieChart