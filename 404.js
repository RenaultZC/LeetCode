var sumOfLeftLeaves = function(root) {
  let result = 0
  let deep = (root, left) => {
    if (!root) {
      return
    }
    if (left) {
      if (!root.left && !root.right) {
        result += root.val
      }
    }
    deep(root.left, true)
    deep(root.right, false)
  }
  deep(root, false)
  return result
};