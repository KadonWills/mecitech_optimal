import { useState } from 'react'
import { Route, Link, Router } from 'react-router-dom'
import Header from './components/Header'
import './index.css'
import Login from './Login'
import PerformanceData from './PerformanceData'
import Signup from './Signup'
import Splash from './Splash'

const App = () => (
  


    <div className="w-full h-[100vh] 2xl:w-[90%] 2xl:mx-auto 2xl:mt-10 2xl:scale-110 relative  m-0 bg-white dark:bg-dark text-primary dark:text-light ">
      <Header />
      {/* <Splash /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <PerformanceData />

    </div>
  
)


export default App
