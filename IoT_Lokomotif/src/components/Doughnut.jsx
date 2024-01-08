import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useGetSummaryQuery } from '../api/slice/summaryApiSlice';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutBar = () => {

    const {data} = useGetSummaryQuery("", {pollingInterval: 10000});

    const data1 = {
        labels: ["Total Active", "Total Inactive"],
        datasets: [
            {
                label: "Locomotive Status",
                data: [data?.active, data?.inactive],
                backgroundColor: [
                    "rgba(19, 78, 74, 0.9)",
                    "rgba(239, 68, 68, 0.8)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        width: 200,
        height: 200,
        backgroundColor: "transparent",
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }

    return (
        <Doughnut data={data1} options={options}/>
    )
}

export default DoughnutBar;