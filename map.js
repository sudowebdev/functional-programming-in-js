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

var mappedArray = [];

mappedArray = people.map(function(person){
    return person.gender === 'Female';
});

console.log(mappedArray);
