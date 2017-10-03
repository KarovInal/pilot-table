import React, {Component} from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-virtualized';
import list from './table.json';

function cellRenderer({ columnIndex, key, rowIndex, style }) {
  return (
    <div key={key} style={style}>
      {
        list[rowIndex][columnIndex].value
      }
    </div>
  )  
}

render(
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
)
