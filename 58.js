var lengthOfLastWord = function(s) {
    s = s.trim()
    s = s.split(' ')
    if(s.length < 1){
        return 0
    }
    return s[s.length - 1].length
};