import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { Route, Link, Router } from 'react-router-dom'
import CleanPanels from './CleanPanels'
import Header from './components/Header'
import ThemeSwitcher from './components/ThemeSwitcher'
import Watermark from './components/Watermark'
import FarmInspection from './FarmInspection'
import './index.css'
import Login from './Login'
import PerformanceData from './PerformanceData'
import Signup from './Signup'
import Splash from './Splash'
import { PanelCleanerItemProps } from './types/PanelCleanerItemProps'

const panelsList: Array<PanelCleanerItemProps> = [
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 12, cleanLevel: 10 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 36, cleanLevel: 30 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 36, cleanLevel: 100 },
  { batteryLevel: 18, cleanLevel: 0 },
  { batteryLevel: 36, cleanLevel: 100 },
]


const App: FunctionComponent = () => {
  const [onSplash, setOnSplash] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(true)
  const [activeTab, setActiveTab] = useState<number>(0)

  const [panels, setPanels] = useState<Array<PanelCleanerItemProps>>(new Array<PanelCleanerItemProps>(...panelsList))

  
  const screens: Array<JSX.Element> = [
    <PerformanceData />,
    <CleanPanels panels={panels} setPanels={setPanels} />,
    <FarmInspection />
  ]


  useEffect(() => {
    const splashInterval = setTimeout(() => setOnSplash(false), 3000)

    return () => {
      clearInterval(splashInterval)
    }
  }, [isSignup]);

  useMemo(() => {
    setActiveTab(0)
    setActiveTab(1)

  }, [panels])

  const handleLoginAction = (ev:MouseEvent) => {
    ev.preventDefault()
    setIsSignup(true)
    setIsLogin(true)
    setActiveTab(0)
  }
  
  const handleSignupAction = () => {
    //ev.preventDefault()
    setIsLogin(true)
    setIsSignup(true)
    setActiveTab(0)
  }

  const handleLogoutAction = (ev:MouseEvent) => {
    ev.preventDefault()
    setActiveTab(-1)
    setIsLogin(false)
    setIsSignup(true)
  }

  const handleTabSwitch = (tabIndex:number) => {
    console.log("switching to: "+tabIndex);
    setActiveTab(tabIndex)
  }

const goToSignup =(ev:MouseEvent)=> {
  ev.preventDefault()
    setIsLogin(true)
    setIsSignup(false)
    setActiveTab(-1)
    console.log("sign up page");
    
}

  return (
    <div className="w-full relative h-[100vh] 2xl:w-[90%] 2xl:mx-auto  2xl:mt-10 2xl:scale-110  m-0 bg-white dark:bg-dark text-primary dark:text-light overflow-x-hidden">
      {onSplash && <Splash />}
      {(!isLogin ) && <Login goToSignup={goToSignup} loginHandler={handleLoginAction} /> }
      {(!isSignup ) && <Signup signupHandler={handleSignupAction} /> }
      {/* <Signup /> */}
      {
        isLogin &&
        <>
          <Header  logout={handleLogoutAction} activeTab={activeTab} tabSwitch={handleTabSwitch}/>
          {screens[activeTab]}
        </>
      }
      
      <ThemeSwitcher />
      { (!isLogin || !isSignup) && <Watermark />}
    </div>

  )
}


export default App
