import utkarshLogo from "../assets/group2522.png";
import bajajLogo from "../assets/bajaj.png";
import srfLogo from "../assets/srf.png";
import mahindraLogo from "../assets/mahindra.png";

export const BankInfo = [
    {
      id: 1,
      name: "Utkarsh Small Finance Bank",
      logo: utkarshLogo,
      benfits: ["Highest Interest Rate", "RBI Insured"],
      interestRate: "9.10",
      color: "bg-[#520B8D]",
      cardColor: "bg-[#F8F0FF]",
      badgeColor: "bg-badgeUtkarsh",
    },
    {
      id: 2,
      name: "Bajaj Finserv",
      logo: bajajLogo,
      benfits: ["Crisil AAA Rated", "No Video KYC required"],
      interestRate: "8.80",
      color: "bg-[#0072BB]",
      cardColor: "bg-[#EFF6FF]",
      badgeColor: "bg-badgeBajaj",
    },
    {
      id: 3,
      name: "Shriram Finance",
      logo: srfLogo,
      benfits: ["Crisil AAA Rated", "No Video KYC required"],
      interestRate: "8.80",
      color: "bg-[#010101]",
      cardColor: "bg-[#F4F4F4]",
      badgeColor: "bg-badgeSRM",
    },
    {
      id: 4,
      name: "Bajaj Finserv",
      logo: mahindraLogo,
      benfits: ["Crisil AAA Rated", "No Video KYC required"],
      interestRate: "8.80",
      color: "bg-[#FF0000]",
      cardColor: "bg-[#FFEFEF]",
      badgeColor: "bg-badgeMahindra",
    },
  ];

  export const Events = [
    {
      id: 1,
      event_type: "Video KYC",
      event_action: "Scheduled On",
      fd_plan: "Utkarsh SF Bank FD Plan 2",
      calendar_date: 28,
      deposit_amount: "Rs. 20,000",
      tenure_years: "2 Years",
      interest_rate: "9.10%",
    },
    {
      id: 2,
      event_type: "Pending Payment",
      event_action: "Pay By",
      fd_plan: "Bajaj Finserv Corp FD 1",
      calendar_date: 30,
      deposit_amount: "Rs. 25,000",
      tenure_years: "18 Months",
      interest_rate: "8.10%",
    },
    {
      id: 3,
      event_type: "Upcoming FD Maturity",
      event_action: "Renew by",
      fd_plan: "Shriram Finance Corp FD 1",
      calendar_date: 30,
      deposit_amount: "Rs. 25,000",
      tenure_years: "18 Months",
      interest_rate: "8.10%",
    },
  ];