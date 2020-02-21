function longestValidParentheses(s){
    if(!s || s.length < 1) return 0;
    var left = right = max = 0;// 用两个变量模拟栈的意义 left是左边括号的数量，right是右边括号的数量
    for (var i = 0; i< s.length; i++){//时间复杂度为o(n)
    if(s[i] == '('){
        left++; //入栈，有多少个入栈
    } else {
        right++; //右边入栈
    }
    if(left == right){
        max = Math.max(max, 2*right);
    }else if(right > left){
        right = left = 0;
    }
  }
  left = right = 0;
  for(var i = s.length-1; i >= 0; i--){
      if(s[i] == ')'){
          right++;
      }else{
          left++;
      }
      if(left == right){
          max = Math.max(max, 2*left);
      }else if(left > right){
          left = right = 0;
      }
  }
  return max;
}
console.log(longestValidParentheses('((())(())'))