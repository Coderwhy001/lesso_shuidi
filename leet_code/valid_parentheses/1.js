var isValid = function(s){
    if (!s || s.length < 1) return true;
    var n = s.length;
    const stack = [];
     if(s.length%2!=0){
        return false;
    }
    for(var i = 0 ; i < n ; i++){
        // console.log(c);
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        }else{
            if(stack.length < 1){
                return false;
            }else{
                if(s[i] == ')' && stack[stack.length-1] == '('){
                    stack.pop();
                }else if(s[i] == ']' && stack[stack.length-1] == '['){
                    stack.pop();
                }else if(s[i] == '}' && stack[stack.length-1] == '{'){
                    stack.pop();
                }
            }
        }
        
    }
    return stack.length > 0? false:true;
}
console.log(isValid('(]])')) //true