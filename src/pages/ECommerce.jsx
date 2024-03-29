import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'

const ECommerce = () => {
    return (
        <div className='mt-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
                    <div className="flex-items-center justify-between">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$63,448.78</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color='white'
                            bgColor='blue'
                            text='Download'
                            borderRadius='10px'
                            size='md'
                        />
                    </div>
                </div>

                <div className='flex felx-wrap justify-center items-center gap-1 m-3'>
                    {earningData.map(item => (
                        <div
                            key={item.title}
                            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                        >
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="font-semibold text-lg">
                                    {item.amount}
                                </span>
                                <span className={`ml-2 text-sm text-${item.pcColor}`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className="text-sm mt-1 text-gray-400">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ECommerce