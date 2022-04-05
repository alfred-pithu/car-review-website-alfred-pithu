import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, CartesianGrid, Area } from 'recharts';


const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data);
    return (
        <div className='container'>
            {/* <h2>Dashboard</h2> */}

            <div className='d-flex'>

                <div className='border border-1 w-50 '>
                    <h6 className='text-center'>Month-wise sales</h6>

                    <LineChart className='mx-auto' width={300} height={200} data={data}>

                        <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                </div>

                {/* AreaChart  */}
                <div className='border border-1 w-50 '>
                    <h6 className='text-center'>Investment VS Revenue</h6>
                    <AreaChart
                        className='mx-auto'
                        width={300}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>



            </div>

        </div>
    );
};

export default Dashboard;