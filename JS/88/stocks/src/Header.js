import React, { Component } from 'react';
import './Header.css';

export default class header extends Component {
    state = {
        allTickers: []
    };
    render() {
        return (
            <header>
                <h1>Stocks</h1>
                <h1>Please choose a stock</h1>
                <div> {this.state.allTickers} </div>
            </header>
        );
    }


    componentDidMount() {
        this.showTickers();
    }


    showTickers() {
        let allTickers1 = [];
        fetch('https://api-v2.intrinio.com/companies?api_key=OjM1Njg3MTY5MDExNTNlN2I2MzA1MzEzOTc1MDhkZWE2')
            .then(response => response.json())
            .then(data => {
                data.companies.forEach(stock => {
                    //console.log(data.companies.length);
                    allTickers1.push(stock.ticker)
                    this.setState({allTickers: allTickers1})
                    console.log(stock.ticker, this.state.allTickers)
                });
            });
    }
}
