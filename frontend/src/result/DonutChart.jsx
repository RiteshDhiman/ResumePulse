import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as CharJS, plugins} from 'chart.js/auto'

function DonutChart({chartData}) {
  return (
    <Doughnut data={chartData} options={{plugins: {legend: {display: false}}}}/>
  )
}

export default DonutChart
