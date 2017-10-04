const fs = require('fs');
const faker = require('faker');

faker.locale = 'ru';

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

let fakeJSON = [];

for (let i = 0; i < 1000; i++) {
  const rowJSON = [];

  for (let ii = 0; ii <= 66; ii++) {
    rowJSON.push(
      {
        type: 'number',
        value: faker.random.number(),
        editable: !!randomInteger(0, 1)
      }, {
        type: 'date',
        value: `${randomInteger(0, 30)}-${randomInteger(1, 12)}-${randomInteger(1900, 2000)}`,
        editable: !!randomInteger(0, 1)
      }, {
        type: 'string',
        value: `${faker.name.firstName()} ${faker.name.lastName()}`,
        editable: !!randomInteger(0, 1)
      }
    );
  }

  fakeJSON.push(rowJSON);
}

fs.writeFile('fakeJSON.json', JSON.stringify(fakeJSON), 'utf-8');
