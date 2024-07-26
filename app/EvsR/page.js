"use client"
import { useState } from 'react';
import React from 'react'

export default function EvsRsaving() {
    const [EstimatedSavings, setEstimated] = useState(30.00);
    const [RealizedSavings, setRealized] = useState(25.5);

    const changeValue = (e) => {
        e.preventDefault();
        console.log(e);
        switch (e.target.value) {
            case '1D': {
                setEstimated(25.67);
                setRealized(15.87);
            }
                break;
            case '1W': {
                setEstimated(56.67);
                setRealized(25.87);
            }
                break;
            case '1M': {
                setEstimated(91.67);
                setRealized(75.87);
            }
                break;
            case '3M': {
                setEstimated(90.7);
                setRealized(85.87);
            }
                break;
        }
    }
    return (
        <>
            <div className="container flex flex-col justify-evenly bg-gray-200 pb-5 pl-5 pr-5 border border-t-white border-t-4 rounded-lg border-b-white border-b-4 border-l-white border-l-2 border-r-white border-r-2">
                <div className='flex flex-row justify-between p-2'>
                    <h5 className="ml-5">Savings: Estimated vs Realized</h5>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1">
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1D" onClick={changeValue}>1D</button>
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1W" onClick={changeValue}>1W</button>
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1M" onClick={changeValue}>1M</button>
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="3M" onClick={changeValue}>3M</button>
                        </div>
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