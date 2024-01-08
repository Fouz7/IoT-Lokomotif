
import React from 'react';
import Sidebar from '../components/sidebar';
import Card from '../components/card';
import { useGetSummaryQuery } from '../api/slice/summaryApiSlice';

function Dashboard() {

    const {data} = useGetSummaryQuery("", {pollingInterval: 10000});

    return (
        <div className="bg-gray-900 h-screen flex">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5">
                <div className="w-full">
                    <Card 
                        totalValue={data?.total}
                        activeValue={data?.active}
                        inactiveValue={data?.inactive}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;
