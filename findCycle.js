function findCycle(arr){
  for(let l=1; l<=arr.length; l++) {
    if(arr.every((n,i)=>n===arr[i%l])) return +arr.slice(0,l).join('');
  }
}
function  (string) {
  return s.match(/^(.*?)\1+$/);
}
