import React, { Component, FunctionComponent, useEffect, useMemo, useState } from 'react'
import { FaAngleDown, FaArrowAltCircleDown, FaCheck, FaCross } from 'react-icons/fa'
import Button from './components/Button'
import OutlinedButton from './components/OutlinedButton'
import PanelCleanerItem from './components/PanelCleanerItem'
import SolarFarms from './components/SolarFarms'
import { PanelCleanerItemProps } from './types/PanelCleanerItemProps'



type CleanPanelsProps = {
    setPanels: React.Dispatch<React.SetStateAction<PanelCleanerItemProps[]>>,
    panels: Array<PanelCleanerItemProps>
}

const CleanPanels: FunctionComponent<CleanPanelsProps> = ({ panels, setPanels }) => {


    const [panelsList, setPanelsList] = [panels, setPanels]
    const [solarPanelCleanInfo, setSolarPanelCleanInfo] = useState<JSX.Element[] | undefined>([]);
    const [refresh, setRefresh] = useState(1)


    useEffect(() => {

        console.log("On Init ...");

        setSolarPanelCleanInfo( panelsList.map((p, i) => (
            <div key={'panel-cleaner-item-' + i} className="w-full my-2">
                <PanelCleanerItem batteryLevel={p.batteryLevel} cleanLevel={p.cleanLevel} />
            </div>
        )))
        setRefresh((_refresh) => _refresh + 1)
        return () => {
        }
    }, [panelsList])

    const handleAllPanelClean = () => {
        //alert("cleaning panels...");

        setRefresh(0)

        let cleanedPanels: PanelCleanerItemProps[] = []

        panels.forEach((panel) => {
            cleanedPanels.push({
                batteryLevel: panel.batteryLevel,
                cleanLevel: 100
            })
        })

        
        setPanelsList(cleanedPanels)
        setPanels(cleanedPanels)

        

        //alert('Panels cleaned successfully !')

    }

    return (
        <main className='flex flex-col md:flex-row h-full space-y-2  md:space-y-0 space-x-2 w-full pt-[210px] md:pt-[15vh]' >

            <div className='flex flex-col  w-full md:max-w-min  justify-between md:space-y-0 md:space-x-2 p-1 '>
                <SolarFarms />
                <div className='flex flex-col space-y-2 p-0 w-full mx-auto bg-red-600'>
                    <p className='flex'>
                        <Button styleClass='text-sm' type={'button'} text={'CLEAN ALL'} handleOnClick={handleAllPanelClean} />
                    </p>
                    <p className='flex space-x-1 pb-5'>
                        <OutlinedButton styleClass='text-sm' type={'button'} text={'ROW 1'} icon={<FaAngleDown />} leadingIcon={false} />
                        <OutlinedButton styleClass='text-sm' type={'button'} text={'CLEAN ROW'} />
                    </p>
                </div>
            </div>

            <section className='min-w-fit w-full   py-1 '>
                <div className='flex flex-col w-full h-full max-h-full overflow-y-scroll  border border-[#999] p-5 bg-light dark:bg-darker '>
                    {/* ranges title */}
                    <div className='flex flex-row w-full text-xs font-bold space-x-5  mb-2'>

                        <div className='w-2/4 mr-auto ' >&nbsp;</div>
                        <div className='w-[10%] text-secondary' >BATTERY</div>
                        <div className='w-[10%]  ' >&nbsp;</div>
                        <div className='w-[5%]  ' >CLEANED</div>
                    </div>
                    {!refresh || solarPanelCleanInfo}
                </div>
            </section>

        </main>
    )


}

export default CleanPanels