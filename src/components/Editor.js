import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Editor = () => {
  return (
     <div className='bg-black pb-2 '>
      <div className=' px-16 flex border border-gray-600  border-y-1 border-x-0  '>

        <div className='bg-zinc-800  mr-8 flex  box-border border border-gray-500 border-x-0.5 bottom-2 w-full h-96 pl-4 '>
           <h1 className='text-gray-400  font-bold pr-4 pt-4 '>HTML</h1>
           <div className='bg-black  h-12 w-full '>
              <div className='bg-zinc-800 w-8 h-8 flex  mt-2 px-2 text-white ml-auto'>
               
                <SettingsIcon /> 
               
              
               <KeyboardArrowDownIcon /> 

      
               
              </div>
           </div>
        </div>
        <div className='bg-zinc-800 mr-8 box-border border border-gray-500 border-x-0.5  bottom-2 w-full h-96 pl-4 '>
          
        </div>
        <div className='bg-zinc-800  box-border border border-gray-500 border-x-0.5   bottom-2 w-full h-96 pl-4 '>
          
        </div>
      </div>
      
     </div>
    
      
  )
}

export default Editor
