
"use client"

import React, { useState } from 'react'

const Page = () => {

    const [height,setHeight] = useState(0); 
    const [Weight,setWeight] = useState(0); 
    const [bmiResult, setBmiResult] = useState<string | null>(null);






    const calculatetBmi=()=>{
       

        const  heightInMeter = parseFloat(height)/100; 
         

        const wieghtInKg = parseFloat(Weight); 

        if(!isNaN(heightInMeter) && !isNaN(wieghtInKg)){
          const bmi = wieghtInKg/(heightInMeter * heightInMeter); 

         setBmiResult(bmi.toFixed(2)); 


        
    }
    else{
      setBmiResult(null); 

    }

  }

  return (
    <div>

<form 
onSubmit={(e)=>{
  e.preventDefault()
  calculatetBmi(); 

}}

className="max-w-sm mx-auto">
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
    <input
    type='number'
     value={height}
      onChange={(e)=>setHeight(e.target.value)}
    
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Height" required />
  </div>
  <div className="mb-5">
    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
    <input
    type='number'
    value={Weight}
    onChange={(e)=>setWeight(e.target.value)}


      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder='Weight' required />
  </div>
   
  <button type='submit'   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

{
  bmiResult && (

    <p className=' flex justify-center text-center align-middle mt-10  text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500'>
      Your Bmi is : {bmiResult}
    </p>
  )
}
</div>
  )
}

export default Page; 

