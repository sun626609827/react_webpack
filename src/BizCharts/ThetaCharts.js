import React,{useState,useRef} from "react";
import {
  Chart,
  Interval,
  Tooltip,
  Legend,
  View,
  Axis,
  Coordinate,
} from "bizcharts";
import { DataView } from "@antv/data-set";
export default function ThetaCharts() {

  const data = [
    { value: 251, type: "大事例一", name: "子事例一" },
    { value: 1048, type: "大事例一", name: "子事例二" },
    { value: 610, type: "大事例二", name: "子事例三" },
    { value: 434, type: "大事例二", name: "子事例四" },
    { value: 335, type: "大事例三", name: "子事例五" },
    { value: 250, type: "大事例三", name: "子事例六" },
  ];
  // 通过 DataSet 计算百分比
  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "value",
    dimension: "type",
    as: "percent",
  });
  // console.log(dv.rows);
  const [typeData, setTypeData] = useState(dv.rows)
  
  const dv1 = new DataView();
  dv1.source(data).transform({
    type: "percent",
    field: "value",
    dimension: "name",
    as: "percent",
  });
 
  //  console.log(dv1.rows);
  return (
    <Chart
      height={400}
      data={dv.rows}
      autoFit
      scale={{
        percent: {
          formatter: (val) => {
            val = `${(val * 100).toFixed(2)}%`;
            return val;
          },
        },
      }}
    >
      <Coordinate type="theta" radius={0.5} innerRadius={0.2} />
      <Axis visible={false} />
      <Legend name="type" visible={true} onChange={(e, chart) => {console.log(e.view.filteredData); setTypeData(e.view.filteredData)
      }}  
      //  filter={(value, datum, idx) => {console.log(value,datum,idx);  return value!=='大事例一'}}
      />
      <Legend name="name" visible={false}
      // filter={(value, datum, idx) => {console.log(value,datum,idx);  return true}}
      />
      <Tooltip showTitle={false} />
      <Interval
        position="percent"
        adjust="stack"
        color={["type", ["#FF0000", "#00FF00", "#0000FF"]]}
        element-highlight
        style={{
          lineWidth: 1,
          stroke: "#fff",
        }}
        label={[
          "type",
          {
            offset: -15,
            style:{
              fontSize: 0,
              
            }
          },
        ]}
      />
      <View data={dv1.rows.filter(res=>res.type ===typeData.find(t=>t.type===res.type)?.type)}>
        <Coordinate type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
        <Axis visible={false} />
        <Interval
          position="percent"
          // position="percent*value"
          adjust="stack"
          color={[
            "name",
            (xVal) => {
              console.log(xVal);
              if (xVal === '子事例一') {
                return 'red';
              }
              return 'blue';
            }
            // ["#FF0000", "#FF0000", "#00FF00", "#00FF00", "#0000FF", "#0000FF"],
          ]}
          element-highlight
          style={{
            lineWidth: 1,
            stroke: "#fff", 
          }}
          label={[
            "name",
            {
              offset: -10,
              style:{
                fontSize: 8,
                // textAlign:'left'
              }
            },
          ]}
        />
      </View>
    </Chart>
  );
}
