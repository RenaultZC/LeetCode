/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let strArr=T.split(""),tempArr=[];
  for(let i=0,len=T.length;i<len;i++){
      if(T.includes(S[i])){
          while(strArr.indexOf(S[i])!=-1){
              tempArr.push(strArr.splice(strArr.indexOf(S[i]),1))
          }
      }
  }
 tempArr= tempArr.concat(strArr);
 return tempArr.join("");
};
console.log(customSortString("exv", "xwvee"));