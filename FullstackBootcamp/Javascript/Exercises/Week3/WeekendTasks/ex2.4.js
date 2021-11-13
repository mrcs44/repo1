const findUnique = (arr) => {

    let same = arr[0];
    let unique;

    if(same != arr[1] && arr[1]===arr[2]){
        return same;
    }

    for(let i=1 ; i<arr.length ; i++){

        if(same !== arr[i]){
            unique = arr[i];
        }
    }
    return unique;

}

console.log(findUnique([7,0,0,0,0,0]));
console.log(findUnique([0,0,0,8,0,0]));