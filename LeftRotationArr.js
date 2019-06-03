function rotLeft(arr, n) {
     let arrTemp = arr.map(v=>v);
     for (let i = 0; i < n; i++) {
         let temp = arrTemp.shift()
        arrTemp.push(temp)
     }
    return arrTemp
}
