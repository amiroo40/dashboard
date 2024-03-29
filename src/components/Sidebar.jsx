import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'

import { useStateContext } from '../context/ContextProvider'



const Sidebar = () => {

    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }

    const activeLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

    const normalLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-grey-700 dark:text-grey-200 dark:hover:text-black hover:bg-light-grey m-2'

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to='/' onClick={handleCloseSidebar} className='items-center gap-3 ml-3 flex dark:text-white text-slate-900 mt-4 text-xl font-extrabold tracking-tight' >
                        <SiShopware /> <span>Shoppy</span>
                    </Link>
                    <TooltipComponent content='menu' position='BottomCenter'>
                        <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='p-3 rounded-full hover:bg-light-gray text-xl mt-4 block md:hidden'>
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className="mt-10">
                    {links.map(item => (
                        <div key={item.title}>
                            <p className="text-grey-400 m-3 mt-4 uppercase">
                                {item.title}
                            </p>
                            {item.links.map(link => (
                                <NavLink
                                    onClick={handleCloseSidebar}
                                    to={`/${link.name}`}
                                    key={link.name}
                                    className={({ isActive }) => isActive ? activeLink : normalLink}
                                >
                                    {link.icon}
                                    <span className="capitalize">{link.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>)}
        </div>
    )
}

export default Sidebar