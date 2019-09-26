(function () {
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customerName, customerAddress, items) {
            this.customerName = customerName;
            this.customerAddress = customerAddress;
            this.items = items;
            // for(let i =0; i< items.length, i++){
            //     this.items[i] = items[i]
            // }
           
            function orderTotal() {
                let t;
                items.forEach(item => {
                    t += item.total;
                });
                return t;
            }
        }
    }

    fetch('./quiz.json')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(cust => {
                const itemsOrdered = new Item (cust.item.item, cust.items.total/cust.items.quantity, cust.items.quantity );
                const custOrder = new Order(cust.customerName, cust.customerAddress, itemsOrdered);
                console.log(custOrder);
            });

        })
        .catch(err => {

        });

}());