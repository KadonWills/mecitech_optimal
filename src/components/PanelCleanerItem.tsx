import { ChangeEvent, DragEvent, FunctionComponent, useEffect, useMemo, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { PanelCleanerItemProps } from '../types/PanelCleanerItemProps'



const PanelCleanerItem: FunctionComponent<PanelCleanerItemProps> = (panel:PanelCleanerItemProps) => {
    
    let {batteryLevel, cleanLevel} = panel

    const [isClean, setIsClean] = useState<boolean>(false)
    const [cleanLevelValue, setCleanLevelValue] = useState<number>(cleanLevel)
    
    const [rangeClass, setRangeClass] = useState<string>('')

    useEffect(() => {
        setIsClean(cleanLevel > 90)
        setRangeClass(isClean ? "success" : "error")
    }, [])

    useMemo(() => {
        setIsClean(cleanLevelValue > 90)
        setRangeClass(isClean ? "success" : "error")
    }, [cleanLevelValue, cleanLevel])

    const handleCleanLevelChange = (ev : ChangeEvent<HTMLInputElement>) => {
        const {value} = ev.currentTarget
        setCleanLevelValue( parseInt(value))
    }

    const handleCleanAction = () => {
        cleanLevel = 100
    }

    return (
        <div className='flex flex-row w-full space-x-5'>
            <input type="range" name="range-1" id="range-1" min={0} max={100} title={'Clean at: '+cleanLevelValue+'%'} step={1} defaultValue={cleanLevelValue}
                className={ rangeClass +` min-w-2/4 w-[60%] bg-[grey]   mr-auto`}
                onChange={e => handleCleanLevelChange(e)}/>

            <div className='w-[10%]  rounded   text-sm flex space-x-2 mx-auto'>
                <div className='bg-[#fff] dark:bg-dark w-12 h-5  font-ultra text-right  font-thin   border border-[#bbb]'>{batteryLevel}</div>
                <span className='h-5'>%</span>
            </div>

            <div className='w-[10%]  rounded   text-sm flex space-x-2 mx-auto '>
                <div className='bg-[#fff] dark:bg-dark w-12 h-5  font-ultra text-right  font-thin   border border-[#bbb]'>{cleanLevelValue}</div>
                <span className='h-5'>%</span>
            </div>

            <div className='w-[5%] bg-[transparent] rounded  text-sm flex space-x-2 mx-auto'>
                <span className='h-5'>
                    {
                        isClean ? <FaCheck className='text-[green] text-xl ' /> : <FaTimes className=' text-xl text-[red]' />
                    }
                </span>
            </div>
        </div>
    )
}

export default PanelCleanerItem