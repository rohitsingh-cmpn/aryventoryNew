import React, { useState, useEffect, useCallback } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function FilterDate({ options, cancel }) {
  // FIX 1: Corrected state variable names for clarity and consistency.
  const [day, setDay] = useState(29);
  const [month, setMonth] = useState("February"); // String name of the month
  const [year, setYear] = useState(2024);
  const [daysInMonth, setDaysInMonth] = useState(31);

  // FIX 2: Centralized logic to calculate days in the month.
  // This effect runs whenever the 'month' or 'year' changes.
  useEffect(() => {
    const monthIndex = months.indexOf(month);
    let numDays;

    if (month === "February") {
      // Correct leap year logic
      const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      numDays = isLeap ? 29 : 28;
    } else if (["April", "June", "September", "November"].includes(month)) {
      numDays = 30;
    } else {
      numDays = 31;
    }

    setDaysInMonth(numDays);

    // FIX 3: Adjust day if it's out of bounds for the new month.
    // e.g., if changing from March 31 to April, day becomes 30.
    if (day > numDays) {
      setDay(numDays);
    }
  }, [month, year, day]); // Dependency array ensures this runs at the right time.

  // FIX 4: Use useCallback to memoize functions for performance.
  // Corrected logic for scrolling days.
  const handleDayScroll = useCallback(
    (event) => {
      if (event.deltaY > 0) {
        // Scrolling down/forward
        setDay((d) => (d === daysInMonth ? 1 : d + 1));
      }
      if (event.deltaY < 0) {
        // Scrolling up/backward
        setDay((d) => (d === 1 ? daysInMonth : d - 1));
      }
    },
    [daysInMonth]
  ); // Re-create function only if daysInMonth changes

  // Corrected logic for scrolling months.
  const handleMonthScroll = useCallback(
    (event) => {
      const currentMonthIndex = months.indexOf(month);
      if (event.deltaY > 0) {
        // Scrolling down/forward
        const nextMonthIndex = (currentMonthIndex + 1) % 12;
        setMonth(months[nextMonthIndex]);
      }
      if (event.deltaY < 0) {
        // Scrolling up/backward
        // FIX 5: Corrected negative index logic
        const prevMonthIndex = (currentMonthIndex - 1 + 12) % 12;
        setMonth(months[prevMonthIndex]);
      }
    },
    [month]
  );

  // Corrected logic for scrolling years.
  const handleYearScroll = useCallback((event) => {
    if (event.deltaY > 0) {
      setYear((y) => y + 1);
    }
    if (event.deltaY < 0) {
      setYear((y) => y - 1);
    }
  }, []);

  return (
    <>
      {/* <div className='flex flex-col p-5 bg-white justify-around rounded-lg shadow-lg'> */}
      {/* <div className='flex w-full justify-around font-bold text-gray-700'>
          {options==3 && <div>Day</div>}
          {options>=2 && <div>Month</div>}
          {(options>=1) &&<div>Year</div>}
        </div>
        {  <div className='flex w-full justify-around  '>
          {options==3 && <div onClick={()=>setDay(day==1?daysInMonth:day-1)} className=" cursor-pointer p-2 rounded ">
            {day==1?daysInMonth:day-1}
          </div>}
          {options>=2 && <div onClick={()=>setMonth(months[(months.indexOf(month)+12-1)%12])} className=" cursor-pointer p-2 rounded ">
            {months[(months.indexOf(month)+12-1)%12]}
          </div>}
          {(options>=1) &&<div onClick={()=>setYear(year-1)} className=" cursor-pointer p-2 rounded ">
            {year-1}
          </div>}
        </div>}
        <hr className='bg-[#E6E6E6] h-[2px] w-[100] border-0' />
        <div className='flex w-full justify-around'>
         { options==3 && <div onWheel={handleDayScroll} className="cursor-pointer p-2 rounded ">
            {day}
          </div>}
          {options>=2 && <div onWheel={handleMonthScroll} className="cursor-pointer p-2 rounded ">
            {month}
          </div>}
          {options>=1 && <div onWheel={handleYearScroll} className="cursor-pointer p-2 rounded ">
            {year}
          </div>}
        </div>
        <hr className='bg-[#E6E6E6] h-[2px] w-[100] border-0' />
        <div className='flex w-full justify-around '>
          {options==3 && <div onClick={()=>setDay(day==daysInMonth?1:day+1)} className=" cursor-pointer p-2 rounded ">
            {day==daysInMonth?1:day+1}
          </div>}
          {options>=2 && <div onClick={()=>setMonth(months[(months.indexOf(month)+1)%12])} className=" cursor-pointer p-2 rounded ">
            {months[(months.indexOf(month)+1)%12]}
          </div>}
          {options>=1 && <div onClick={()=>setYear(year+1)} className=" cursor-pointer p-2 rounded ">
            {year+1}
          </div>}
        </div>
        
        
      </div> */}
      <div className="bg-[#F8F9FD] p-3 rounded-xl ">
        <div
          className={` grid h-28 gap-2 ${options == 3 ? "grid-cols-3" : ""} ${
            options == 2 ? "grid-cols-2" : ""
          } ${"grid-cols-1" && options == 1} text-center `}
        >
          {options == 3 && <div>Day</div>}
          {options >= 2 && <div>Month</div>}
          {options >= 1 && <div>Year</div>}

          {options == 3 && (
            <div
              onClick={() => setDay(day == 1 ? daysInMonth : day - 1)}
              className="font-light text-sm cursor-pointer  rounded "
            >
              {day == 1 ? daysInMonth : day - 1}
            </div>
          )}
          {options >= 2 && (
            <div
              onClick={() =>
                setMonth(months[(months.indexOf(month) + 12 - 1) % 12])
              }
              className="font-light text-sm cursor-pointer  rounded "
            >
              {months[(months.indexOf(month) + 12 - 1) % 12]}
            </div>
          )}
          {options >= 1 && (
            <div
              onClick={() => setYear(year - 1)}
              className=" cursor-pointer text-sm font-light rounded "
            >
              {year - 1}
            </div>
          )}

          {options == 3 && (
            <div
              onWheel={handleDayScroll}
              className="cursor-pointer  border-y-2 border-gray-300  "
            >
              {day}
            </div>
          )}
          {options >= 2 && (
            <div
              onWheel={handleMonthScroll}
              className="cursor-pointer  border-y-2 border-gray-300 "
            >
              {month}
            </div>
          )}
          {options >= 1 && (
            <div
              onWheel={handleYearScroll}
              className="cursor-pointer   border-y-2 border-gray-300 "
            >
              {year}
            </div>
          )}

          {options == 3 && (
            <div
              onClick={() => setDay(day == daysInMonth ? 1 : day + 1)}
              className="font-light text-sm cursor-pointer rounded "
            >
              {day == daysInMonth ? 1 : day + 1}
            </div>
          )}
          {options >= 2 && (
            <div
              onClick={() => setMonth(months[(months.indexOf(month) + 1) % 12])}
              className="font-light text-sm cursor-pointer rounded "
            >
              {months[(months.indexOf(month) + 1) % 12]}
            </div>
          )}
          {options >= 1 && (
            <div
              onClick={() => setYear(year + 1)}
              className="font-light text-sm cursor-pointer rounded "
            >
              {year + 1}
            </div>
          )}
        </div>
        <div className="flex w-full pt-3 justify-around">
          <button
            onClick={() => cancel(0)}
            className="px-4 py-1  text-white  bg-[#f89320] hover:bg-[#f89320]/90 rounded "
          >
            Cancel
          </button>
          <button className="px-4 py-1 text-white  bg-[#f89320] rounded hover:bg-[#f89320]/90">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterDate;
