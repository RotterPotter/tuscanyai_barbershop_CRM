import React from 'react'
import PendulumSVG from '../assets/PendulumSVG'

export default function Navbar({openedPage, setOpenedPage}) {
  const availablePages = ["BookingManagmentPage", "AnalyticsPage", "AISettingsPage"]

  return (
    <div className=' flex justify-center items-center'>
      <div className='w-full max-w-[1440px] h-[80px] flex flex-row justify-between items-center sm:px-10 pr-4 pt-3 pb-3'>
        <div className='flex justify-center items-center sm:ml-0 -ml-2 '>
          <div>
            <PendulumSVG className="hidden lg:block" width={"64px"} height={"64px"}></PendulumSVG> 
            <PendulumSVG className="lg:hidden " width={"54px"} height={"54px"}></PendulumSVG> 
          </div>
          <div className='flex flex-col justify-start sm:items-end items-start '>
            <p className='text-md sm:text-2xl font-semibold text-red-80 '>Barbershop CRM</p>
            <p className='text-sm sm:text-base font-semibold text-black/60 '>tuscanyai.it</p>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex justify-center items-center gap-5 '>
            <button className={`hover:cursor-pointer transition-all duration-100 px-2 border-red-500 ${(openedPage == "BookingManagmentPage") ? "border-b-3 translate-y-1 font-semibold   rounded-xs " : "" }`} type='button' onClick={() => setOpenedPage("BookingManagmentPage")}>Booking Managment</button>
            <button className={`hover:cursor-pointer transition-all duration-100 px-2 border-red-500 ${(openedPage == "AnalyticsPage") ? "border-b-3 translate-y-1 font-semibold   rounded-xs " : "" }`} type='button' onClick={() => setOpenedPage("AnalyticsPage")}>Analytics</button>
            <button className={`hover:cursor-pointer transition-all duration-100 px-2 border-red-500 ${(openedPage == "AISettingsPage") ? "border-b-3 translate-y-1 font-semibold   rounded-xs " : "" }`} type='button' onClick={() => setOpenedPage("AISettingsPage")}>Settings</button>
          </div>
          
          <PendulumSVG className="hidden lg:block" width={"64px"} height={"64px"}></PendulumSVG> 
          
        </div>
      </div>
    </div>
    
  ) 
}