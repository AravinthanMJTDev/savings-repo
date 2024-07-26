"use client"
import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const generateCostData = () => {
    const today = moment();
    const startDate = moment('2024-01-01');
    const costs = [];

    for (let date = startDate; date.isBefore('2024-07-30'); date.add(1, 'days')) {
        const cost = parseFloat((Math.random() * 100000).toFixed(2));
        costs.push({ date: date.format('YYYY-MM-DD'), cost });
    }

    return costs;
};

const CostChart = () => {
    const costData = generateCostData();
    // console.log(costData)
    const [startDate, setStartDate] = useState('2024-01-01');
    const [endDate, setEndDate] = useState('2024-07-28');


    const filteredData = costData.filter(item => {
        const itemDate = moment(item.date);
        return itemDate.isBetween(moment(startDate), moment(endDate), 'day', '[]');
    });

    const getCostByDate = (date) => {
        const found = costData.find(item => item.date === moment(date).format('YYYY-MM-DD'));
        return found ? found.cost : 0;
    };

    const startDateCost = getCostByDate(startDate);
    const endDateCost = getCostByDate(endDate);
    const saved = (startDateCost - endDateCost).toFixed(2);

    const copy = filteredData.map(item => [moment(item.date).format('DD/MM'), item.cost])
    console.log(copy)

    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: `Total Savings from ${moment(startDate).format('MMM D, YYYY')} to ${moment(endDate).format('MMM D, YYYY')}  is  ${saved}`
            ,
            style: {
                fontFamily: "Apple Color Emoji",
                fontSize: '16px',
                fontWeight: 'medium'
            }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value:%b %d}' // Display day and month
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Financial Savings'
            }
        },
        tooltip: {
            xDateFormat: '%b %d, %Y', // Tooltip date format
            pointFormat: 'Savings: <b>{point.y:,.2f}</b>'
        },
        series: [{
            name: 'Savings',
            data: filteredData.map(item => [moment(item.date).format('DD/MM'), item.cost])
        }]
    };

    return (
        <div className="flex flex-col justify-between  w-[1000px] bg-white border border-8 border-gray-300 ml-auto mr-auto pl-10 pr-10 pb-10 rounded-lg">
            <div className="flex flex-row w-full justify-between bg-white items-center mt-10 mb-10 mr-10">
                <label className="self-start mr-4 text-lg font-sans"> Financial savings</label>
                <div className="flex flex-row ">
                    <div className="border border-black p-2 mr-2">
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <span className="mx-2">-</span>
                    <div className="border border-black p-2">
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                </div>
            </div>

            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default CostChart;
