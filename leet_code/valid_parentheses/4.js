function longestValidParentheses(s){
    // 时间复杂度o(n)
    var max = 0; //返回最大长度
    if(s.length == 0 || s.length == 1) return max;
    var stack = [-1];
    for(var i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push(i);//i就是下标
        }else{
            stack.pop();
            if(stack.length < 1){
                stack.push(i);//栈顶元素匹配完了，后面的元素入栈开始
            }else {
                max = Math.max(max, i - stack[stack.length - 1]);//栈顶元素与当前元素下标相减
            }
        }
    }
    return max;
}
console.log(longestValidParentheses(')(())('))