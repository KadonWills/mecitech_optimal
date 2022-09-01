import { useEffect, useMemo, useState } from 'react'
import { Route, Link, Router } from 'react-router-dom'
import CleanPanels from './CleanPanels'
import Header from './components/Header'
import './index.css'
import Login from './Login'
import PerformanceData from './PerformanceData'
import Signup from './Signup'
import Splash from './Splash'


const screens: Array<JSX.Element> = [
  <PerformanceData />,
  <CleanPanels/>,
  <></>
]

const App = () => {
  const [onSplash, setOnSplash] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(true)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const splashInterval = setTimeout(() => setOnSplash(false), 3000)

    return () => {
      clearInterval(splashInterval)
    }
  }, []);

  useMemo(() => {

  }, [isLogin])

  const handleLoginAction = (ev:MouseEvent) => {
    ev.preventDefault()
    setIsLogin(true)
  }

  const handleLogoutAction = (ev:MouseEvent) => {
    ev.preventDefault()
    setIsLogin(false)
  }

  const handleTabSwitch = (tabIndex:number) => {
    console.log("switching to: "+tabIndex);
    
    setActiveTab(tabIndex)
  }

  return (
    <div className="w-full h-[100vh] 2xl:w-[90%] 2xl:mx-auto  2xl:mt-10 2xl:scale-110 relative  m-0 bg-white dark:bg-dark text-primary dark:text-light ">
      {onSplash && <Splash />}
      {!isLogin && <Login loginHandler={handleLoginAction} /> }
      {/* <Signup /> */}
      {
        isLogin &&
        <>
          <Header  logout={handleLogoutAction} activeTab={activeTab} tabSwitch={handleTabSwitch}/>
          {screens[activeTab]}
        </>
      }
      

    </div>

  )
}


export default App
