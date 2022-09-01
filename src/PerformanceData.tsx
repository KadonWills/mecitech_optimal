import React from 'react'
import SolarFarms from './components/SolarFarms'
import Header from './components/Header'
import SolarFarmAnalytics from './components/SolarFarmAnalytics'
import HardwarePerformanceStats from './components/HardwarePerformanceStats'

const PerformanceData = () => {
    return (
        <>
            

            <main className='flex flex-col space-y-0 w-full md:pt-[15vh]' >

                <div className='flex flex-col md:flex-row w-full space-y-2 md:space-x-2 p-2'>
                    <SolarFarms  />
                    <SolarFarmAnalytics />
                </div>

                <div>
                    {/* HardwarePerformanceStats */}
                    <HardwarePerformanceStats />
                </div>

            </main>
        </>
    )
}

export default PerformanceData