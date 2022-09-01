import React, { FunctionComponent } from 'react'
import { SolarPanelProps } from '../types/SolarPanelProps'

const SolarPanelData: FunctionComponent<SolarPanelProps> = ({ voltage, current, power }) => {
    return (
        <div className='flex flex-row space-x-10 p-1 relative justify-end ml-auto'>
            
            <div className=' rounded min-w-max flex space-x-2'>
                <div className='bg-[#fff] w-10 h-5  font-ultra items-center flex font-thin  text-right text-base border border-[#bbb]'>{voltage}</div>
                <span>V</span>
            </div>
            <div className=' rounded min-w-max flex space-x-2'>
                <div className='bg-[#fff] w-10 h-5  font-ultra items-center flex font-thin  text-right text-base border border-[#bbb]'>{current}</div>
                <span>A</span>
            </div>
            <div className=' rounded min-w-max flex space-x-2'>
                <div className='bg-[#fff] w-10 h-5  font-ultra items-center flex font-thin  text-right text-base border border-[#bbb]'>{power}</div>
                <span>W</span>
            </div>

        </div>
    )
}

export default SolarPanelData