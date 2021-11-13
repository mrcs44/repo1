function trib(n){
    let arr = [0, 1, 1];
    for (let i = 3; i < n + 1; i++){
      arr.push(arr[i - 3] + arr[i - 2] + arr[i -1])
      console.log(arr);
    }
   return arr;
  }
  console.log(trib(9));