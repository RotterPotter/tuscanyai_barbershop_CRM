import React from 'react'
import CLoseSVG from "../assets/CLoseSVG"
import { useState } from 'react';

export default function AddAppointmentWindow({addNewAppointment, setIsAddAppointmentWindowOpen}) {
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

  
  
  return (
    <div
    className='absolute inset-0 flex justify-center items-center z-40 bg-white/60 w-full h-full rounded-3xl'
    >
      <form className='w-[600px] h-[400px] bg-white rounded-xl shadow-2xl border border-black flex flex-col items-center '
        action="POST"
        onSubmit={addNewAppointment}   
        >
          <button
            type="button"
            className="top-3 right-3 hover:cursor-pointer"
            onClick={() => setIsAddAppointmentWindowOpen(false)}
          >
            <CLoseSVG height={'30px'} width={'30px'} />
          </button>
          <div className="w-full mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Client Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500`}
              placeholder="Inserisci il tuo nome"
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
