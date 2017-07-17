/**
 * Created by iamoperand on 17/7/17.
 */

var people = [

    {name: 'Nikhil', gender: 'Male'},
    {name: 'Saumya', gender: 'Female'},
    {name: 'Dalip', gender: 'Male'},
    {name: 'Ashwin', gender: 'Male'},
    {name: 'Shelly', gender: 'Female'},
    {name: 'Gursimran', gender: 'Female'}

];

var females = [], males = [];

females = people.filter(function(person){
    return person.gender === 'Female';
})

males = people.filter(function(person){
    return person.gender === 'Male';
})

console.log("Females: ", females);
console.log("Males: ", males);
