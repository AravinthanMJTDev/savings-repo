import React from 'react'

export default function TotalSavings() {
    const EnergySavings = 4030;
    const FinancialSavings = "96,782";
    const co2Savings = "2,68,342";
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="container flex flex-col justify-center bg-gray-200 pb-5 pl-5 pr-5 border border-t-white border-t-4 rounded-lg border-b-white border-b-4 border-l-white border-l-2 border-r-white border-r-2">
                <div className='flex flex-row justify-between p-2'>
                    <h5 className="ml-5">Total Savings</h5>

                    <div>
                        <button></button>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className="h-px bg-gray-300"></div>

                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-center items-center">
                        <label>Energy Savings</label>
                        <h1 className="font-bold text-green-700 text-4xl mt-5">
                            {EnergySavings}
                            <p className="font-medium text-green-700 text-lg inline-block">kwh</p>
                        </h1>



                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="flex flex-col justify-center items-center">
                        <label>Financial Savings</label>
                        <h1 className="font-bold text-green-700 text-4xl mt-5">{FinancialSavings}<p className="font-medium text-green-700 text-lg inline-block">$</p></h1>
                    </div>

                    <div className="w-px bg-gray-300"></div>
                    <div className="flex flex-col justify-center items-center">
                        <label>CO2 Savings</label>
                        <h1 className="font-bold text-green-700 text-4xl mt-5">{co2Savings}<p className="font-medium text-green-700 text-lg inline-block">kg</p></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}