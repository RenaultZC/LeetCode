/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  var arr=N.toString().split('').map(a=>parseInt(a)),
      result=true;
  while(result){
      for(var i=1;i<arr.length;i++){
          if(arr[i]>=arr[i-1]){
              result=false;
          }else{
              arr[i-1]-=1;
              for(var ii=i;ii<arr.length;ii++){
                  arr[ii]=9;
              }
              result=true;
              break;
          }
      }
  }
      return parseInt(arr.join(''));
};
console.log(monotoneIncreasingDigits(332));