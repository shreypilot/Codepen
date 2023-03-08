import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import PushPinIcon from '@mui/icons-material/PushPin';
import Codepen from "./codepen.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


const Header = () => {
  return (
    <>
    <div className='bg-black grid grid-flow-col box-border border-b-1 shadow-lg shadow-gray-700'>
      <div className='flex col-span-1'>
        <div className='cursor-pointer'>
          <img
            className='w-10 h-10 mt-5 ml-2 bg-white ' 
            src={Codepen} 
            alt="codepen"
            title='codepen' />
        </div>
      <div className='flex flex-col p-2 m-2'>
        <div>
          <h1 className='text-white cursor-pointer font-extrabold'>
            Let's Start Using React
          </h1>
            
      </div>
        
        <div className='flex flex-row'>
          <h1 className='font-light text-gray-300 cursor-pointer'>Brad/LearnWebCode</h1>
          <button className='bg-green-500 px-0.5 ml-2 rounded-sm'>+Follow</button>
        </div>
        
        </div>
      </div>
      <div className='col-span-1/2 flex flex-row  justify-end pr-4 space-x-2'>
        <button className='bg-gray-600 font-bold space-x-1 text-white mt-2  px-2 py-3 justify-end items-end w-26 h-12 rounded-sm flex '>
        <div className= "cursor-pointer">
          ☁️
        </div>
        <div className='cursor-pointer'>
          Save
        </div>
        </button>
        <div className='bg-gray-600 font-bold text-white mt-2  px-2 py-3 justify-end items-end w-26 h-12 rounded-sm flex  '>
         <div className='px-1 cursor-pointer'>
          <SettingsIcon />
         </div>
         <div className='cursor-pointer'>
          Settings
         </div> 
        </div>
          <div className='bg-gray-600 mt-2 px-2 py-1 text-white  pt-3 pl-3 justify-end items-end w-12 h-12 rounded-sm'>
           <IndeterminateCheckBoxIcon  />
          </div>
          <div className='bg-gray-600 text-white mt-2 px-2 pt-1 pb-2 flex cursor-pointer justify-end items-end w-16 h-12 rounded-sm'>
             <PushPinIcon /> 
             <KeyboardArrowDownIcon />
          </div>
          <div className='bg-blue-400 mt-2 px-5 py-1 justify-end items-end w-16 h-12 cursor-pointer  rounded-sm'>
              👧
          </div>
      </div>
    </div>
    </>
  )
}

export default Header
