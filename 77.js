var combine = function (n, k) {
    let arr = [], result = [], tab = []
    let deep = (index) => {
      for(let i = index; i <= n; i ++){
        if (!arr[i]) {
          arr[i] = true
          tab.push(i)
          if (tab.length === k) {
            result.push([...tab])
          } else {
            deep(i + 1)
          }
          tab.pop()
          arr[i] = false
        }
      }
    }
    deep(1)
    return result
};