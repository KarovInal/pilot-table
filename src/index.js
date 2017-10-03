import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-virtualized';
import data from './data.json';

// Grid data as an array of arrays
const list = data;

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex].value}
    </div>
  )  
}

// Render your grid
ReactDOM.render(
  <Grid
    cellRenderer={cellRenderer}
    columnCount={list[0].length}
    columnWidth={100}
    height={600}
    rowCount={list.length}
    rowHeight={30}
    width={1500}
  />,
  document.getElementById('root')
);