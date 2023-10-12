// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {
    add : function(a,b){return a+b} ,
    subtract : function(a,b){return a-b},
    multiply : function(a,b){return a*b},
    divide : function(a,b){return a/b}


};
let resultAdd = calculator.add(10,20);
let resultDivide = calculator.divide(3000,10);
console.log(resultAdd);
console.log(resultDivide);