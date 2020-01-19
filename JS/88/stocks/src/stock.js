import React, { Component } from "react";

export default class Stock extends Component{
    render(){
        return(
           <div> </div>
        );
    }

    
    componentDidMount(){
        this.getStockQuote();
    }
    

    getStockQuote(){
        fetch('https://api-v2.intrinio.com/companies/AAPL?api_key=OjM1Njg3MTY5MDExNTNlN2I2MzA1MzEzOTc1MDhkZWE2')
        .then(response => response.json())
        .then(data => {
            // this.setState({stockShowing: data})
            (console.log(data))
        });
    }

}
