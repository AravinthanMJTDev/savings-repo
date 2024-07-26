"use client"
import { useState } from 'react';
import React from 'react'

export default function TotalSavings() {
    const [EnergySavings, setEnergy] = useState(4030);
    const [FinancialSavings, setFinancial] = useState("96,782");
    const [co2Savings, setCO2] = useState("2,68,342");

    const changeValue = (e) => {
        e.preventDefault();
        console.log(e);
        switch (e.target.value) {
            case '1D': {
                setEnergy(2567);
                setFinancial("15,879");
                setCO2("2,34,154")
            }
                break;
            case '1W': {
                setEnergy(5667);
                setFinancial("25,887");
                setCO2("1,23,456")
            }
                break;
            case '1M': {
                setEnergy(9167);
                setFinancial("75,087");
                setCO2("3,12,321")
            }
                break;
            case '3M': {
                setEnergy(9097);
                setFinancial("85,987");
                setCO2("4,23,134")
            }
                break;
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="container flex flex-col justify-center bg-gray-200 pb-5 pl-5 pr-5 border border-t-white border-t-4 rounded-lg border-b-white border-b-4 border-l-white border-l-2 border-r-white border-r-2">
                <div className='flex flex-row justify-between p-2'>
                    <h5 className="ml-5">Total Savings</h5>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-0 bg-gray-300 rounded-lg">
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1D" onClick={changeValue}>1D</button>
                            <div className="w-px bg-gray-400"></div>
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1W" onClick={changeValue}>1W</button>
                            <div className="w-px bg-gray-400"></div>
                            <button className="w-8 h-8 bg-gray-300 rounded-lg" value="1M" onClick={changeValue}>1M</button>
                            <div className="w-px bg-gray-400"></div>
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