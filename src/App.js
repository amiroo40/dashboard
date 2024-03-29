import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, ThemeSettings, Sidebar, Stacked } from './components'

import {
    Area, Bar, Financial, ColorMapping, Calendar, ColorPicker, Customers, ECommerce, Editor, Employees, Kanban, Line, Orders, Pie, Pyramid,
} from './pages'

import './app.css'
import { useStateContext } from './context/ContextProvider';


const App = () => {

    const { activeMenu } = useStateContext()

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed bottom-4 right-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ backgroundColor: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-bg bg-main-bg main-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar">
                            <Navbar />
                        </div>
                        <div>
                            <Routes>
                                {/* dashboard */}
                                <Route path='/' element={<ECommerce />} />
                                <Route path='/ecommerce' element={<ECommerce />} />

                                {/* pages */}
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                {/* apps */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/editor' element={<Editor />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area />} />
                                <Route path='/pie' element={<Pie />} />
                                <Route path='/bar' element={<Bar />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/financial' element={<Financial />} />
                                <Route path='/color-mapping' element={<ColorMapping />} />
                                <Route path='/stacked' element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
