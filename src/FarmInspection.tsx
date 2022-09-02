import React from 'react'
import { FaChartArea, FaChartLine, FaDownload, FaHeartbeat } from 'react-icons/fa'
import { IoAnalyticsOutline, IoAnalyticsSharp, IoCloudDownload, IoDownload, IoStatsChart } from 'react-icons/io5'
import { BeatLoader } from 'react-spinners'
import Button from './components/Button'
import OutlinedButton from './components/OutlinedButton'
import PanelCleanerItem from './components/PanelCleanerItem'
import SolarFarms from './components/SolarFarms'


const FarmInspection = () => {

    const printReport = () => {
        
        globalThis.window.print() 
    }

  return (
    <main className='flex flex-col md:flex-row h-full space-y-2  md:space-y-0 space-x-2 w-full pt-[210px] md:pt-[15vh]' >

    <div className='flex flex-col  w-full md:max-w-min  justify-between md:space-y-0 md:space-x-2 p-1 '>
        <SolarFarms />
        <div className='flex flex-col space-y-2 p-0 w-full  items-stretch  pb-5'>
            
            <Button styleClass='text-sm w-full m-0' type={'button'} text={'DIAGNOSE BATCH '}  />
            <Button styleClass='text-sm w-full m-0 disabled' type={'button'} text={'DIAGNOSE PANELS'}  />
            <Button styleClass='text-sm w-full m-0 disabled' type={'button'} text={'DIAGNOSE OPTI-BOTS'}  />
        
            
        </div>
    </div>

    <section className='min-w-fit flex flex-col md:flex-row md:space-x-1 w-full   py-1 '>
        <div className='flex flex-col w-full h-full relative max-h-full overflow-y-scroll  border border-[#999] py-2 px-1 bg-light dark:bg-darker '>
            <h2 className='font-bold'>BATCH DIAGNOSIS</h2>

            <div className="rounded h-[50%] min-w-max w-[100%] flex items-center justify-center mx-auto mt-5 bg-[white] dark:bg-darker">
                <BeatLoader color='rgb(15 153 34)' className='opacity-40 text-8xl'/>
            </div>

            <div className="flex flex-row px-5 min-w-full mt-5 justify-between text-sm font-bold">
                <div className="flex space-x-1">
                    <span>Faulty Panels</span>
                    <span className='px-4 border-primary border rounded'>4</span>
                </div>
                <div className="flex space-x-1">
                    <span>Low Voltage</span>
                    <span className='px-4 border-primary border rounded'>5</span>
                </div>
            </div>

            <OutlinedButton type={'button'} 
            text={'DIAG. REPORT'} 
            leadingIcon={false} 
            icon={<FaDownload />} 
            styleClass="absolute right-3 bottom-3 scale-90" 
            handleOnClick={printReport} />

        </div>
        <div className='flex flex-col w-full h-full relative max-h-full overflow-y-scroll  border border-[#999] py-2 px-1 bg-light dark:bg-darker '>
            <h2 className='font-bold'>OPTI-BOTS DIAGNOSIS</h2>

            <div className="rounded h-[50%] min-w-max w-[100%] flex items-center justify-center mx-auto mt-5 bg-[white] dark:bg-darker">
                <BeatLoader color='rgb(15 153 34)' className='opacity-40 text-8xl'/>
            </div>

            <div className="flex flex-row px-5 min-w-full mt-5 justify-between text-sm font-bold">
                <div className="flex space-x-1">
                    <span>Faulty Panels</span>
                    <span className='px-4 border-primary border rounded'>4</span>
                </div>
                <div className="flex space-x-1">
                    <span>Low Voltage</span>
                    <span className='px-4 border-primary border rounded'>5</span>
                </div>
            </div>

            <OutlinedButton type={'button'} 
            text={'DIAG. REPORT'} 
            leadingIcon={false} 
            icon={<FaDownload />} 
            styleClass="absolute right-3 bottom-3 scale-90" 
            handleOnClick={printReport} />

        </div>
        <div className='flex flex-col w-full h-full relative max-h-full overflow-y-scroll  border border-[#999] py-2 px-1 bg-light dark:bg-darker '>
            <h2 className='font-bold'>PANELS DIAGNOSIS</h2>

            <div className="rounded h-[50%] min-w-max w-[100%] flex items-center justify-center mx-auto mt-5 bg-[white] dark:bg-darker">
                <BeatLoader color='rgb(15 153 34)' className='opacity-40 text-8xl'/>
            </div>

            <div className="flex flex-row px-5 min-w-full mt-5 justify-between text-sm font-bold">
                <div className="flex space-x-1">
                    <span>Faulty Panels</span>
                    <span className='px-4 border-primary border rounded'>4</span>
                </div>
                <div className="flex space-x-1">
                    <span>Low Voltage</span>
                    <span className='px-4 border-primary border rounded'>5</span>
                </div>
            </div>

            <OutlinedButton type={'button'} 
            text={'DIAG. REPORT'} 
            leadingIcon={false} 
            icon={<FaDownload />} 
            styleClass="absolute right-3 bottom-3 scale-90" 
            handleOnClick={printReport} />

        </div>
    </section>

</main>
  )
}

export default FarmInspection