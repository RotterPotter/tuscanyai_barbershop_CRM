import React from 'react'
import CLoseSVG from "../assets/CLoseSVG"
import { useState, useRef, useEffect } from 'react';

export default function AddAppointmentWindow({addNewAppointment, setIsAddAppointmentWindowOpen}) {
  const dateSelectorRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' })); // Clear errors on input change
  };

  useEffect(() => {
      function handleClickOutside(event) {
        if (dateSelectorRef.current && !dateSelectorRef.current.contains(event.target)) {
          setIsAddAppointmentWindowOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsAddAppointmentWindowOpen]);

  
  
  return (
    <div
    className='absolute inset-0 flex justify-center items-center z-40 bg-white/60 w-full h-full rounded-3xl'
    >
      <form className=' px-10 py-5 w-[480px] h-[480px] bg-white rounded-xl shadow-2xl border border-black flex flex-col items-center gap-2 overflow-auto custom-scrollbar'
        ref={dateSelectorRef}
        action="POST"
        onSubmit={addNewAppointment}   
        >
          <button
            type="button"
            className="hover:cursor-pointer w-full flex justify-end"
            onClick={() => setIsAddAppointmentWindowOpen(false)}
          >
            <CLoseSVG height={'30px'} width={'30px'} />
          </button>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Client Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Service Type
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Barber
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Time
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Service type
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-medium mb-2" htmlFor="name">
              Notes
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Type client name here"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
        
        
        

      </form>
  
    </div>
  )
}
