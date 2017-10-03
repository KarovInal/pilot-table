import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-virtualized';
import list from './table.json';

console.log(list[0]);

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {
        list[rowIndex][columnIndex].value
      }
    </div>
  )  
}

render(
  <Grid
    cellRenderer={cellRenderer}
    columnCount={list.length}
    columnWidth={100}
    height={300}
    rowCount={list.length}
    rowHeight={30}
    width={900}
  />,
  document.getElementById('root')
)