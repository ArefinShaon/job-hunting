import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import StatBanner from '../StatBanner/StatBanner';
import './Satatistics.css'

const data = [
  {name: 'A-1', Marks: 59},
  {name: 'A-2', Marks: 58},
  {name: 'A-3', Marks: 60},
  {name: 'A-4', Marks: 55},
  {name: 'A-5', Marks: 60},
  {name: 'A-6', Marks: 60},
  {name: 'A-7', Marks: 60},
  {name: 'A-8', Marks: 60},
];

const Statistics = () => {
  return (
    <div>
      <StatBanner></StatBanner>
          <div className='mt-12'>
          <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
     </div>
    </div>
  );
};

export default Statistics;
