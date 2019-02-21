/*An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords.
 Arrow function expressions are ill suited as methods, and they cannot be used as constructors.*/

var materials = [
    'Hydrogen',
    'lithium',
    'Helium',
    'Beryllium'
];

console.log(materials.map(materials => materials.length));

// Basic Syntax

/*(param1, param2, ..........param n) =>{ Statements }
* (param1, param2, ..........param n) => Expression
    EQUIVALENT TO: => {return expression; }*/

//( ) are optional when there's only one parameter name:
// (singlePARA) => { statements }
// singlePARA => { statements }

/*If No parameters provided then still (_) are required*/
// (_) => { statements }

let x = materials.map(function (material) {
    return material.length;
});

console.log(x); // returns an array of [ 8,7,6,9]


let y = materials.map(material => {
    return material.length + 10;
}); //Only one parameter hence (_) not required

console.log(y);

//When the only statement in the arrow function is 'RETURN' then we can remove 'RETURN' and the {} brackets

materials.map(material => material.length);
