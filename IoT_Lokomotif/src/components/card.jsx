import React from 'react';
import DoughnutBar from './Doughnut';


const Card = ({totalValue, activeValue, inactiveValue}) => {
    
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="h-1/5 w-full bg-gradient-to-br from-purple-500 to-blue-500 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mr-14 mb-9 flex flex-row justify-between">
                <h2 className="text-2xl font-bold text-white ">Total Locomotives</h2>
                <h2 className="text-8xl font-bold text-white">{totalValue}</h2>
            </div>
            <section className='flex flex-row h-4/6'>
                <div className="h-full w-2/12 bg-gradient-to-br from-teal-800 to-emerald-500 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 -ml-12 mr-14 mb-9 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-white whitespace-nowrap">Total Active</h2>
                    <h2 className="text-6xl font-bold text-white text-center">{activeValue}</h2>
                </div>
                <div className="h-full w-8/12 bg-gradient-to-br from-teal-500 to-violet-500 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mr-14 flex flex-col justify-center">
                    <DoughnutBar />
                </div>
                <div className="h-full w-2/12 bg-gradient-to-br from-rose-500 to-orange-300 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mr-2 mb-9 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-white whitespace-nowrap">Total Inactive</h2>
                    <h2 className="text-6xl font-bold text-white text-center">{inactiveValue}</h2>
                </div>
            </section>
        </div>
    );
};

export default Card;
