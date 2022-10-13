import React from 'react'
import LineCharts from './LineCharts'
import ThetaCharts from './ThetaCharts'
import ThetaCharts2 from './ThetaCharts2'
export default function BizCharts() {
    return (
        <React.Fragment>
           <div>
           <LineCharts/>
           </div>
           <div>
           <ThetaCharts/>
           </div>
           <div>
           <ThetaCharts2/>
           </div>
        </React.Fragment>
    )
}
