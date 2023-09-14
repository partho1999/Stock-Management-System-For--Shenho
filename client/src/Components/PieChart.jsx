// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'pink',
//           '#17a2b8',
//           '#ffc107',
//           'rgb(87, 185, 96)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
// };

// const PieChart = () => {
//     return (
//         <div className='w-96 h-50 mx-auto'>
//             <div className='header'>

//                 <div className='links'>

//                 </div>
//             </div>
//             <Pie data={data}  />
//         </div>
//     );
// };

// export default PieChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
        ],
        hoverBackgroundColor: [
          'darkred',
          'darkblue',
          'darkyellow',
          'darkgreen',
          'darkpurple',
        ],
      },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
};


const PieChart = () => {
    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    );
};

export default PieChart;