import React, { FunctionComponent } from 'react'

type HardwarePerformanceCardProps = {
    title: string,
    icon: JSX.Element,
    attributes: Array<{title:string, value:number, unit?:string}>
}

const HardwarePerformanceCard:FunctionComponent<HardwarePerformanceCardProps> = ({title, icon, attributes}) => {
  return (
    <div className='flex flex-col space-y-4 items-center w-full h-max border-b-2 md:border-b-0 md:border-l-2 border-opacity-10 border-primary p-2' >
        <h3 className='text-base font-bold font-sans uppercase '>{title}</h3>
        <div className='text-5xl'>
            {icon}
        </div>
        <div className='flex flex-col space-y-3 w-full  items-center'>
            {
                attributes.map((attr) => (
                    <div className='flex flex-row flex-1 space-x-1 w-11/12 text-xs font-medium font-mono  mx-auto'> 
                        <span className='w-[30%] whitespace-nowrap mr-auto'>
                            {attr.title}
                        </span>
                        <div className='w-[33%] h-[1.1rem] cursor-not-allowed text-right px-3 mx-auto border border-[#bbb]  align-middle bg-[#ffffff58]'>
                            {attr.value}
                        </div>
                        <span className='w-[10%]'>
                            {attr.unit}
                        </span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HardwarePerformanceCard