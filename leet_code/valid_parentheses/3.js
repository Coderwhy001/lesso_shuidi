var longestValidParentheses = function(s) {
    var max = 0;
    if(s.length == 0 || s.length ==1) return max;
    var stack = [];
    for(var i = 0; i < s.length; i++){
        var tmpMax = 0;
        for(var j = i; j < s.length; j++){
            if(s[j] == '('){
                stack.push('(');
                tmpMax++;
            }else if(s[j] == ')'){
                if(stack.length < 1){
                    max = max<tmpMax?tmpMax:max;
                    break;
                }else{
                    stack.pop();
                    tmpMax++;
                }
            }
        }
        if(stack.length == 0){
            max = max<tmpMax?tmpMax:max;
        }
        stack = [];
    }
    return max;
}
console.log(longestValidParentheses('(())('))