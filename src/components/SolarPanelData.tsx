import React, { FunctionComponent } from 'react'
import { SolarPanelProps } from '../types/SolarPanelProps'

const SolarPanelData: FunctionComponent<SolarPanelProps> = ({ voltage, current, power }) => {
    return (
        <div className='flex flex-row flex-1 space-x-10 p-1 '>
            
            <div className=' rounded min-w-max align-middle text-sm flex space-x-2'>
                <div className='bg-[#fff] dark:bg-dark w-12 h-5  font-ultra text-right  font-thin   border border-[#bbb]'>{voltage}</div>
                <span className='h-5'>V</span>
            </div>
            <div className=' rounded min-w-max align-middle text-sm flex space-x-2'>
                <div className='bg-[#fff] dark:bg-dark w-12 h-5  font-ultra text-right  font-thin   border border-[#bbb]'>{current}</div>
                <span className='h-5'>A</span>
            </div>
            <div className=' rounded min-w-max align-middle text-sm flex space-x-2'>
                <div className='bg-[#fff] dark:bg-dark w-12 h-5  font-ultra text-right  font-thin   border border-[#bbb]'>{power}</div>
                <span className='h-5'>W</span>
            </div>

        </div>
    )
}

export default SolarPanelData