var videoStitching = function(clips, T) {
  let result = 1, start = 0, max = 0
  clips = clips.sort((a, b) => {
    return a[0] - b[0]
  })
  for (let i = 0, len = clips.length; i < len; i ++){
    if (clips[i][0] <= start) {
      if (clips[i][1] >= max) {
        max = clips[i][1]
      }
    } else if(max >= clips[i][0]) {
      result ++;
      start = max;
      max = clips[i][1]
    }
    if(max >= T){
      break
    }
  }
  if (max >= T) {
    return result
  }
  return -1
};