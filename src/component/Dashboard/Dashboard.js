import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, CartesianGrid, Area, BarChart, Bar, PieChart, Pie } from 'recharts';


const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data);
    return (
        <div className='container '>
            {/* <h2>Dashboard</h2> */}

            <div className='row g-5'>

                <div className='  col-lg-6 col-12 '>
                    <h6 className='text-center  text-primary'>Month-wise sales</h6>

                    <LineChart className='mx-auto' width={300} height={200} data={data}>

                        <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                </div>

                {/* AreaChart  */}
                <div className=' col-lg-6  col-12 '>
                    <h6 className='text-center text-primary'>Investment VS Revenue</h6>
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

                {/* BarChart */}
                <div className='  col-lg-6  col-12 '>
                    <h6 className='text-center text-primary'>Investment VS Revenue</h6>
                    <BarChart
                        className='mx-auto'
                        width={300}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>

                {/* PieChart */}
                <div className='  col-lg-6  col-12 '>
                    <h6 className='text-center text-primary'>Investment VS Revenue</h6>
                    <PieChart className='mx-auto' width={300} height={300}>
                        <Pie data={data} dataKey="investment" cx='50%' cy='35%' outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx='50%' cy='35%' innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>



            </div>

        </div>
    );
};

export default Dashboard;