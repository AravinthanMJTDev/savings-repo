import React from 'react'

export default function EvsRsaving() {
    const EstimatedSavings = 30.00;
    const RealizedSavings = 25.5;
    return (
        <>
            <div className="container flex flex-col justify-evenly bg-gray-200 pb-5 pl-5 pr-5 border border-t-white border-t-4 rounded-lg border-b-white border-b-4 border-l-white border-l-2 border-r-white border-r-2">
                <div className='flex flex-row justify-between p-2'>
                    <h5 className="ml-5">Savings: Estimated vs Realized</h5>

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
                        <label>Estimated Savings</label>
                        <h1 className="font-bold text-green-700 text-8xl mt-5">{EstimatedSavings.toFixed(2)}
                            <p className="font-medium text-green-700 text-lg inline-block">%</p>
                        </h1>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="flex flex-col justify-center items-center">
                        <label>Realized Savings</label>
                        <h1 className="font-bold text-green-700 text-8xl mt-5">{RealizedSavings.toFixed(2)}<p className="font-medium text-green-700 text-lg inline-block">%</p></h1>
                    </div>
                </div>
            </div>
        </>
    )
}