import { ChangeEvent, DetailedReactHTMLElement, FunctionComponent, MouseEvent, ReactHTML, ReactHTMLElement, SelectHTMLAttributes, useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import solarFarmData from "../data/solarFarmData"
import { SolarFarmProps } from "../types/SolarFarmProps"
import { SolarPanelProps } from "../types/SolarPanelProps"



const getFarmPropertiesArray = (farm: SolarFarmProps) : Array<any> => {
  return [
    { k: "# of panels", v: farm?.properties.number_of_panels },
    { k: "Panel size - l x w (m)", v: farm?.properties.panel_size },
    { k: "Rows x Columns", v: farm?.properties.row_columns },
    { k: "# of Opti-Bots", v: farm?.properties.number_of_opti_bots },
  ]
}

const SolarFarms: FunctionComponent = () => {

  const [selectedSolarFarm, setSelectedSolarFarm] = useState<SolarFarmProps>()
  const [farmProps, setFarmProps] = useState<any[]>([])

  useEffect(() => {
    let farm = solarFarmData.find((sf) => sf.id == 1);
    setSelectedSolarFarm(farm);
    setFarmProps(getFarmPropertiesArray(farm))
    console.log("default farm selected : "+farm?.label);

    return () => {

    }
  }, [])

  const handleSolarFarmSelection = (e: ChangeEvent) => {
    let {value} =  e.currentTarget as HTMLSelectElement
    //console.log(value);

    let farm = solarFarmData.find(sf => sf.label === value)
    setFarmProps(getFarmPropertiesArray(farm))
  }


  const triggerSelect = (e: MouseEvent) => { 
    let select = e.currentTarget.nextElementSibling as HTMLSelectElement
    select.autofocus = true
    //select.requestPointerLock()
    select.focus()
    select.click()
    
  }

  return (
    
    <section className='w-full md:w-min md:max-w-1/3 space-y-2 max-h-[40vh]   scroll-p-0 -scroll-m-1 '>
      <div className="flex flex-row w-full p-0">
        { false && <span  onClick={triggerSelect}  className="group cursor-pointer">
          <div className="w-[40px] min-h-full bg-[#bbb] grid place-items-center border-y border-r border-primary">
            <FaAngleDown className="text-lg group-hover:scale-125 duration-200 ease-linear" />
          </div>
        </span>}

        <select defaultChecked={true} name="solarFarmList" id="solarFarmList"
          className=' min-w-full px-1 py-2 border-primary   text-sm bg-light dark:bg-darker  font-bold'
          defaultValue={selectedSolarFarm?.label}
          onChange={(e) => handleSolarFarmSelection(e)}>


          {
            solarFarmData.map(solarFarm => (
              <option
                className="max-w-[100%] font-light"
                key={'solar-farm-' + solarFarm.id} value={solarFarm.label}>{solarFarm.label}</option>
            ))
          }
        </select>


      </div>
      <div className="bg-light dark:bg-darker flex flex-col text-sm font-medium border border-[#bbb] w-full h-[40vh]  max-h-[37.7vh] overflow-y-scroll">
        <div className="flex  flex-col space-y-2 border-0 w-[95%] mx-auto m-2 ">
          {
            farmProps.map((property: { k: string, v: string | number | undefined }, index: number) => (

              <div key={"farm-prop-" + index} className="flex flex-row justify-between  border items-center h-9 p-1 border-[#bbb]">
                <span className="">
                  {property.k}
                </span>
                <span className="">
                  {property.v}
                </span>
              </div>
                
            ))
          }
        </div>


      </div>
    </section>

  )
}

export default SolarFarms