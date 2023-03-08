import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { VscCode } from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';
import {TbNorthStar} from 'react-icons/tb';

const Editor = () => {
  return (
     <div className='bg-black pb-2 '>
      <div className=' px-16 flex border border-gray-600 pl-4   border-y-1 border-x-0 pr-0.5  '>

       
      <div className='bg-zinc-800  mr-8 flex  box-border border border-gray-500 border-x-0.5 bottom-2 w-full h-96 pl-4  '>
          <div className='flex bg-black w-full h-12 justify-between'>
            <div className='bg-zinc-800 flex pt-4 pr-2  '>
              <div className='bg-red-500 w-4 h-4 mr-2 mt-1 rounded-md'>
              <VscCode />
              </div>
              <div className=' text-white font-bold '>HTML</div>
              </div>
            <div className='space-x-1'>
              <div className=' flex  '>
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <SettingsIcon /> 
                </div> 
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <KeyboardArrowDownIcon /> 
                </div>
              </div>
           </div>
          </div>   
        </div>

        <div className='bg-zinc-800  mr-8 flex  box-border border border-gray-500 border-x-0.5 bottom-2 w-full h-96 pl-4  '>
          <div className='flex bg-black w-full h-12 justify-between'>
            <div className='bg-zinc-800 flex pt-4 pr-2  '>
              <div className='bg-blue-500 w-4 h-4 mr-2 mt-1 rounded-md'>
              <TbNorthStar />
              </div>
              <div className=' text-white font-bold '>CSS</div>
              </div>
            <div className='space-x-1'>
              <div className=' flex  '>
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <SettingsIcon /> 
                </div> 
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <KeyboardArrowDownIcon /> 
                </div>
              </div>
           </div>
          </div>   
        </div>




        <div className='bg-zinc-800  mr-8 flex  box-border border border-gray-500 border-x-0.5 bottom-2 w-full h-96 pl-4  '>
          <div className='flex bg-black w-full h-12 justify-between'>
            <div className='bg-zinc-800 flex pt-4 pr-2  '>
              <div className='bg-yellow-500 w-4 h-4 mr-2 mt-1 rounded-md'>
              <BiCodeCurly />
              </div>
              <div className=' text-white font-bold '>JS</div>
              </div>
            <div className='space-x-1'>
              <div className=' flex  '>
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <SettingsIcon /> 
                </div> 
                <div className='bg-zinc-800 w-8 h-8 mt-2 mr-1 p-1 text-white cursor-pointer '>
                  <KeyboardArrowDownIcon /> 
                </div>
              </div>
           </div>
          </div>   
        </div>

      
      
      
      
      
      
      
      </div>  
        

      </div>
      



      
      
     
    
      
  )
}

export default Editor
