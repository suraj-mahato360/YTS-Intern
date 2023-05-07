import React from 'react';
import InfoCard from './InfoCard';
import ChartComponent from './ChartComponent';

const Dashboard = () => {


  return (
    <>
    <div style={{display:"flex", flexDirection:"column", marginTop:"3rem"}}>
        <div style={{display:"inline-flex",gap:"1rem",flexWrap:"wrap", marginBottom:"20px"}}>
        <InfoCard title="Total Earning" money="₹50000"/>
        <InfoCard title="Earning per day" money="₹500"/>
        <InfoCard title="Total hours worked" money="120hr"/>
        <InfoCard title="hours per day worked" money="6hr"/>
        </div>
        <div style={{width:"70vw"}}>
        <ChartComponent/>
        </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default Dashboard