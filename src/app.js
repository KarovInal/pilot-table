import React, {Component} from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-virtualized';
import list from './fakeJSON.json';

import 'react-virtualized/styles.css';
import './style.css';

const onCellMouseDown = (e) => {
  if (e.target.getAttribute('data-editable') !== 'true') e.preventDefault();
};

const onCellClick = (e) => {
  if (e.target.getAttribute('data-editable') === 'true') e.target.setAttribute('contenteditable', true);
};

function cellRenderer({ columnIndex, key, rowIndex, style }) {
  const type = list[rowIndex][columnIndex].type;
  const editable = list[rowIndex][columnIndex].editable;

  return (
    <div className="cell"
         key={key}
         style={style}
         data-editable={ editable }
         data-type={ type }
         onMouseDown={ onCellMouseDown }
         onClick={ onCellClick }>
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
    columnWidth={130}
    height={600}
    rowCount={list.length}
    rowHeight={40}
    width={1500}
  />,
  document.getElementById('root')
);
