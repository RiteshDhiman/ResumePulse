import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, Tooltip, Legend} from 'chart.js/auto'

ChartJS.register(Tooltip, Legend);

function DonutChart({chartData}) {
  return (
    <Doughnut data={chartData} options={{plugins: {legend: {display: false}, tooltip: {enabled: false}}}}/>
  )
}

export default DonutChart
