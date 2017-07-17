/**
 * Created by iamoperand on 17/7/17.
 */
var orders = [
    {name: 'Momos', amount: 50},
    {name: 'Pizza', amount: 250},
    {name: 'Chowmein', amount: 70},
    {name: 'Samosa', amount: 10},
    {name: 'Patty', amount: 12}
];

var totalBillAmount = orders.reduce(function(sum, order){
    return sum + order.amount;
}, 0);

console.log("The total bill amount is: ", totalBillAmount);