import React from 'react'
import { FaBatteryThreeQuarters, FaCarBattery, FaChargingStation, FaCircleNotch, FaHome, FaHouseDamage } from 'react-icons/fa'
import { IoPowerSharp } from 'react-icons/io5'
import { CircleLoader, RingLoader } from 'react-spinners'
import { PieChart } from 'recharts'
import HardwarePerformanceCard from './HardwarePerformanceCard'

const performanceData = [
    [
        {title: "Expected power", value: 0.0, unit:"WATT"},
        {title: "Power output", value: 0.0, unit:"WATT"},
        {title: "###", value: 0.0, unit:""},
    ],
    [
        {title: "Amp Hour Rating", value: 0.0, unit:"AH"},
        {title: "Battery Temp", value: 0.0, unit:"°C"},
        {title: "Time to full Charge", value: 0.0, unit:"Min"},
    ],
    [
        {title: "Charging Current", value: 0.0, unit:"A"},
        {title: "Charging Voltage", value: 0.0, unit:"V"},
        {title: "###", value: 0.0, unit:""},
    ],
    [
        {title: "Current Load", value: 0.0, unit:"A"},
        {title: "Discharge Time", value: 0.0, unit:"Hrs"},
        {title: "Discharge Rate", value: 0.0, unit:"A/Hr"},
    ],
]

const HardwarePerformanceStats = ():JSX.Element => {
  return (
    <section className="flex flex-row md:max-h-[45vh]  p-2  mx-2 justify-evenly space-x-2 min-w-max   bg-light border border-[#bbb]" >

        <HardwarePerformanceCard
        title='Performance data'
        icon={<FaCircleNotch />}
        attributes={performanceData[0]} 
        />
        <HardwarePerformanceCard
        title='Battery data'
        icon={<FaCarBattery />}
        attributes={performanceData[1]} 
        />
        <HardwarePerformanceCard
        title='Charging data'
        icon={<FaChargingStation className='text-secondary' />}
        attributes={performanceData[2]} 
        />
        <HardwarePerformanceCard
        title='Consumption data'
        icon={<FaHouseDamage/>}
        attributes={performanceData[3]}      />
        

    </section>
  )
}

export default HardwarePerformanceStats