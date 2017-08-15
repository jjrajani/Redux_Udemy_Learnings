import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
 } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
  // return Math.round(data.reduce((a, b) => a + b) / data.length);
}

export default ({ data, color, unit }) => (
  <div className="chart">
    <Sparklines data={data} width={180} height={120} >
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div className="legend">{average(data)}<span className="unit">{unit}</span></div>
  </div>
);
