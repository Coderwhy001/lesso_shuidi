function ListNode(val){
    this.val = val;
    this.next = null
}


var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// console.log(n1);

var reverseKGroup = function(head,k){
    if(!head || k==1){ //空链表或者k为1
        return head;
    }
    var dummy ={//哨兵结点
        next:head
    }
    var start = dummy;
    var end = head;
    var count = 0;
    while(end!=null){
        count++;
        if(count % k == 0){
            start = reverse(start,end.next) 
            end = start.next
        }else{
            end = end.next
        }
    }
    return dummy.next;
}

var reverse = function(start,end){
    var curr = start.next;
    var prev = start;
    var first = curr;
    while(curr!=end){
        var temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    start.next = prev;
    first.next = curr; 
    return first;
}
console.log(reverseKGroup(n1,3));