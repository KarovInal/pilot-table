import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-virtualized';

let list = ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA']

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )  
}

render(
  <Grid
    cellRenderer={cellRenderer}
    columnCount={list[0].length}
    columnWidth={100}
    height={300}
    rowCount={list.length}
    rowHeight={30}
    width={300}
  />,
  document.getElementById('root')
)