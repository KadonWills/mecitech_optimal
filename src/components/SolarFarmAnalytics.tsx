import React, { FunctionComponent, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

import { PuffLoader } from 'react-spinners'
import { FaChartBar, FaChartLine } from 'react-icons/fa'
import { SolarPanelProps } from '../types/SolarPanelProps'
import Button from './Button'
import SolarPanelData from './SolarPanelData'

const data = [
    { x: 'Jan', p_c: 10, pv: 0, amt: 2400 },
    { x: 'Feb', p_c: 10, pv: 2400, amt: 2400 },
    { x: 'Mar', p_c: 30, pv: 2400, amt: 2400 },
    { x: 'Apr', p_c: 50, pv: 2400, amt: 2400 },
    { x: 'May', p_c: 40, pv: 2400, amt: 2400 },
    { x: 'Jun', p_c: 50, pv: 2400, amt: 2400 },
    { x: 'Jul', p_c: 60, pv: 2400, amt: 2400 },
    { x: 'Aug', p_c: 50, pv: 2400, amt: 2400 },
    { x: 'Sep', p_c: null, pv: 2400, amt: 2400 },
    { x: 'Oct', p_c: null, pv: 2400, amt: 2400 },
    { x: 'Nov', p_c: null, pv: 2400, amt: 2400 },
    { x: 'Dec', p_c: null, pv: 2400, amt: 2400 },
];

const renderBarChart: JSX.Element = (
    <BarChart className='min-w-max w-full  text-secondary' width={550} height={230} data={data} margin={{ top: 5, right: 0, bottom: 3, left: 0 }}>
        <Legend width={100} wrapperStyle={{ top: 10, right: 10, backgroundColor: '#f5f5f5', border: '1px solid #0258ad', borderRadius: 3, lineHeight: '20px' }} />
        <CartesianGrid stroke= "#0a55" strokeDasharray="5 5" />
        <Bar fill='#0258ad' dataKey="p_c"  />
        <XAxis dataKey="x" className='text-secondary' />
        <YAxis dataKey="p_c" />
        <Tooltip labelClassName='m-0 px-0' />
    </BarChart>
);
const renderLineChart: JSX.Element = (
    <LineChart className='min-w-max w-full m-0 text-secondary ' width={550} height={230} data={data} margin={{ top: 5, right: 0, bottom: 3, left: 0 }}>
        <Line type="monotone" dataKey="p_c" stroke="#0258ad" />
        <Legend width={100} wrapperStyle={{ top: 10, right: 10, backgroundColor: '#f5f5f5', border: '1px solid #0258ad', borderRadius: 3, lineHeight: '20px' }} />
        <CartesianGrid stroke= "#0a55" strokeDasharray="5 5" />
        <XAxis dataKey="x" className='text-secondary' />
        <YAxis dataKey="p_c" />
        <Tooltip labelClassName='m-0 px-0' />
    </LineChart>
);

const panels: SolarPanelProps[] = [
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 700 },
    { voltage: 36, current: 2.5, power: 300 },
    { voltage: 36, current: 2.5, power: 300 },
    { voltage: 36, current: 2.5, power: 300 },
    { voltage: 36, current: 2.5, power: 300 },
    { voltage: 36, current: 2.5, power: 300 },
]

const charts: Array<JSX.Element> = [
    renderLineChart,
    renderBarChart
]

const SolarFarmAnalytics: FunctionComponent = () => {

    const [activeChart, setActiveChart] = useState<number>(1)


    return (
        <section className='flex flex-col md:flex-row md:max-h-[45.4vh] h-full p-2 m-0 justify-evenly space-y-3 md:space-y-0 overflow-hidden md:space-x-2 max-w-full  md:min-w-max w-full  bg-light dark:bg-darker border border-[#bbb] '>

            <div className='w-full md:w-2/3 p-1 flex relative flex-col space-y-2 max-h-[44vh] overflow-y-scroll bg-light dark:bg-darker border border-[#bbb] '>
                {
                    panels.map((p, index) => (
                        <div key={"solar-panel-data-"+index} className='rounded flex  border border-[#bbb]   max-full ml-auto '>
                            <span className='h-[1px] bg-[#bbb] w-1/5 absolute -left-2 mt-[15px]'></span>
                            <SolarPanelData voltage={p.voltage} current={p.current} power={p.power} />
                        </div>
                    ))
                }

            </div>

            <div className='w-full p-0 min-h-max bg-light dark:bg-darker border border-[#bbb] flex flex-col space-y-2 relative overflow-x-scroll'>

                {
                    charts[activeChart-1]
                    
                    ?? 
                    
                    <PuffLoader color='#0258ad' className='mx-auto opacity-50 my-auto' />
                }

                <div className='w-full absolute -bottom-1 left-1/2 -translate-x-1/2  flex justify-evenly mx-auto scale-75 -mt-80'>
                    <Button handleOnClick={() => setActiveChart(1)} icon={<FaChartLine />} type={"button"} text={'P/C'} leadingIcon={false} styleClass={activeChart !== 1 ?  "opacity-40" : ''}/>
                    <Button handleOnClick={() => setActiveChart(2)} icon={<FaChartBar />} type={"button"} text={'P/C'} leadingIcon={false} styleClass={activeChart !== 2 ?  "opacity-40" : ''} />
                    <Button handleOnClick={() => setActiveChart(3)} icon={<FaChartLine />} type={"button"} text={'P/C'} leadingIcon={false} styleClass={activeChart !== 3 ?  "opacity-40" : ''} />
                </div>
            </div>
        </section>
    )
}

export default SolarFarmAnalytics