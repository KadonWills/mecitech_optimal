import { FunctionComponent, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import navList from '../data/navs_list'
import { NavButtonProps } from '../types/NavButtonProps'
import NavButton from './NavButton'

type HeaderProps = {
    activeTab: number,
    tabSwitch: Function,
    logout: Function
}

const Header: FunctionComponent<HeaderProps> = ({ activeTab, tabSwitch, logout }) => {


    return (
        <section className='w-full z-50 fixed flex flex-col md:flex-row min-h-max space-y-4 md:space-y-0 md:min-h-[15vh] justify-center md:justify-between bg-[#e1e1e1] dark:bg-dark border-b-[#aaa] border px-10 py-2 md:items-center'>
            <span className='font-black tracking-widest text-2xl md:-mt-10'>
                OPTIMAL
            </span>

            {
                navList.map((nav: NavButtonProps, index) => (
                    <div key={nav.id} onClick={() => tabSwitch(index)}>
                        <NavButton id={nav.id} title={nav.title} url={nav.url} isActive={index === activeTab} />
                    </div>
                ))
            }

            <div className="flex w-[100px] ">
                <div className='absolute top-6 right-0 -translate-y-1/2 w-[120px] min-h-[1px] dark:bg-light bg-primary'></div>
                <div className="rounded-full md:float-left mt-0 md:-mt-8 cursor-pointer" onClick={(ev) => logout(ev)}>
                    <FaUserCircle className='text-2xl' />
                </div>
            </div>

        </section>
    )
}

export default Header