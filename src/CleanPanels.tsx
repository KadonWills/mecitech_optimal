import { FunctionComponent } from 'react'
import { FaAngleDown, FaArrowAltCircleDown } from 'react-icons/fa'
import Button from './components/Button'
import OutlinedButton from './components/OutlinedButton'
import SolarFarms from './components/SolarFarms'

const CleanPanels: FunctionComponent = () => {
  return (
    <main className='flex flex-col md:flex-row h-full space-y-2 md:space-y-0 space-x-2 w-full pt-[210px] md:pt-[15vh]' >

            <div className='flex flex-col  w-full justify-between md:space-y-0 md:space-x-2 p-1'>
                <SolarFarms />
                <div className='flex flex-col space-y-2 w-full md:max-w-1/3 bg-red-600'>
                    <p className='flex'>
                        <Button styleClass='text-sm' type={'button'} text={'CLEAN ALL'} />
                    </p>
                    <p className='flex  justify-evenly'>
                        <OutlinedButton styleClass='text-sm' type={'button'} text={'ROW 1'} icon={<FaAngleDown />} leadingIcon={false} />
                        <OutlinedButton styleClass='text-sm' type={'button'} text={'CLEAN ROW'} />
                    </p>
                </div>
            </div>

            <div className='flex flex-col w-full m-0 p-0'>
                <div>.:::
                    </div>
            </div>

        </main>
  )
}

export default CleanPanels