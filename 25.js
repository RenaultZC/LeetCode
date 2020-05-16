function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseKGroup = function(head, k) {
  let i = 0, temp = null, res = [], nHead = null, result = null;
  while(head) {
    if (i === 0) {
      if (temp)
        res.push(temp);
      temp = new ListNode(head.val);
    } else {
      let tmp = new ListNode(head.val);
      tmp.next = {...temp};
      temp = tmp;
    }
    i++;
    head = head.next;
    if (i === k) {
      i = 0;
    }
  }
  if (i) {
    let len = res.length;
    res[len] = new ListNode(temp.val);
    temp = temp.next;
    while(temp){
      let tmp = new ListNode(temp.val);
      tmp.next = {...res[len]};
      res[len] = tmp;
      temp = temp.next;
    }
  } else {
    if (temp)
      res.push(temp);
  }
  temp = null;
  res.forEach(v => {
    if (!result) {
      result = {...v};
      temp = result;
    }else {
        while(temp.next){
          temp = temp.next;
        }
        temp.next = {...v};
    }
  });
  return result;
};
console.log(reverseKGroup({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}, 3));