import React, {Component} from "react";
import {render} from 'react-dom';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid/dist/ag-grid.js';
const faker = require('faker');


import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};


//Возможно лучше пересмотреть структуру под эту таблицу
const dataRow = [
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
    [{make: "Toyota"}, {someNumber: 1000}, {model: "Celica"}, {model: "Celica"}, {price: 35000}],
];

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridOptions: {
                api: {},
                columnApi: {},
                rowData: this.createRowData(),
                columnDefs: this.createColumnDefs(),

                enableColResize: true,
                onGridReady: this.onGridReady.bind(this)
            }
        }
    }

    onGridReady(params) {
        this.state.gridOptions.api = params.api;
        this.state.gridOptions.columnApi = params.columnApi;

        this.state.gridOptions.api.sizeColumnsToFit();
    }


    createColumnDefs() {
        return [
            {headerName: "Make", field: "make", pinned: true},
            {headerName: "Model", field: "someNumber", editable: true},
            {headerName: "Model", field: "model", editable: true},
            {headerName: "Model", field: "make", editable: true},
            {headerName: "Model", field: "price", editable: true},
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "someNumber", editable: true},
            {headerName: "Model", field: "model", editable: true},
            {headerName: "Model", field: "make", editable: true},
            {headerName: "Model", field: "price", editable: true}
        ];
    }

    createRowData() {
        let data = [];
        let row = {};
        dataRow.forEach((item) => {
            item.forEach((obj) => {
                for (let key in obj) {
                    row[key] = obj[key];
                }
            });
            data.push(row);
            console.log(data)
        });

        return data;
    }

    render() {
        let containerStyle = {
            height: 300,
            width: 1000
        };

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    // properties
                    columnDefs={this.state.gridOptions.columnDefs}
                    rowData={this.state.gridOptions.rowData}

                    gridOptions={this.state.gridOptions}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};

render(
    <Grid />,
    document.getElementById('root')
);
