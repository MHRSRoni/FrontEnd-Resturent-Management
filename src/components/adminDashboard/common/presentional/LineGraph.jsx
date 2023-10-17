import { Line } from 'react-chartjs-2'; 
import {CategoryScale, Chart,  LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

const LineGraph = () => {
    Chart.register(CategoryScale)
    Chart.register(LinearScale)
    Chart.register(PointElement)
    Chart.register(LineElement)
    Chart.register(Title)
    Chart.register(Tooltip)
    Chart.register(Legend)


    const data={
        // x-axis label values
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
        datasets: [
          {
            label: "# number of customer",
            data: [200, 300, 1300, 520, 2000, 350,150],
            fill: false,
            borderWidth:2,
            backgroundColor: "#F7C25D",
            borderColor:'#F7C25D',
            responsive:true,
          },
        ],
      }

    const config = {
        type : 'line',
          
    }

    return (
            <Line
            data={data}
            options={config}
            >

            </Line>
    );
};

export default LineGraph;