const fourOps = (str, num1, num2) => {
    if(str === '+') return (num1 + num2) ;
    if(str === '-') return (num1 - num2) ;
    if(str === '/') return (num1 / num2) ;
    if(str === '*') return (num1 * num2) ;
};

console.log(fourOps('/', 8, 4));