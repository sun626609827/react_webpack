import React from "react";
import { Chart, LineAdvance} from 'bizcharts';
export default function LineCharts() {
  // 数据源
  const data = [
    {
      month: "Jan",
      city: "London",
      temperature: 7
    },
    {
      month: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      month: "Mar",
      city: "London",
      temperature: 16.5
    },
    {
      month: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      month: "May",
      city: "London",
      temperature: 10
    },
    {
      month: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      month: "Jul",
      city: "London",
      temperature: 9.2
    },
    {
      month: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      month: "Sep",
      city: "London",
      temperature: 9.3
    },
    {
      month: "Oct",
      city: "London",
      temperature: 10.3
    },
    {
      month: "Nov",
      city: "London",
      temperature: 8.9
    },
    {
      month: "Dec",
      city: "London",
      temperature: 9.8
    }
  ];
  
  return (
    <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
		<LineAdvance
			shape="smooth"
			point
			area
			position="month*temperature"
			color="city"
		/>
	
	</Chart>
  );
}
