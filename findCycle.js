function findCycle(arr){
  for(let l=1; l<=arr.length; l++) {
    if(arr.every((n,i)=>n===arr[i%l])) return +arr.slice(0,l).join('');
  }
}
function findCycle(string) {
  return string.match(/^(.*?)\1+$/);
}
