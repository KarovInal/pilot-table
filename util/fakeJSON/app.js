const fs = require('fs');
const faker = require('faker');

faker.locale = 'ru';

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const types = ['number', 'data', 'string'];

let fakeJSON = {
  table: {
    width: '1000px',
    height: '1000px',
    rows: '3',
    columns: '3',
    fixedHeaders: true,
    fixedLeftColumn: true
  },

  columns: [

  ],

  cells: [

  ]
};

for (let i = 0; i < fakeJSON.table.columns; i += 1) {
  fakeJSON.columns.push({
    name: faker.random.word(),
    width: '10px',
    resizable: !!randomInteger(0, 1)
  });
}

for (let i = 0; i < fakeJSON.table.rows; i++) {
  const rowJSON = [];

  for (let ii = 0; ii < fakeJSON.table.columns; ii++) {
    rowJSON.push({
      id: faker.random.uuid(),
      type: types[randomInteger(0, 2)],
      editable: !!randomInteger(0, 1),
      value: faker.name.firstName(),
      tooltip: 'tooltipValue',
      styles: ''
    })
  }

  fakeJSON.cells.push(rowJSON);
}

fs.writeFile('fakeJSON.json', JSON.stringify(fakeJSON), 'utf-8');
