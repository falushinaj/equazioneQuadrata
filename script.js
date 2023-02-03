"use strict"

function solveEquation (a, b, c) {
    let result = {}; 
    let D = (b * b - 4 * a * c); 
    if(D < 0) {
        result['Discriminant'] = D;
        return result;
    } if(D === 0) {
        result["Quadratic Roots"] = (-b + Math.sqrt(D)) / (2 * a);
    }  else if (D > 0) {
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        result["Quadratic Roots"] = tmp;
      }
      return result;
}
console.log(solveEquation(0,1,3));

