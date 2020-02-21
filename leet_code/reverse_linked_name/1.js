function ListNode(val){
    this.val = val;
    this.next = null;
}


var reverseList = function(head){
    if(!head || !head.next) return head; //如果链表头指针为空或者头指针的下一个节点为空 则返回头指针
    let cur = head;
    let pre = null;
    while(head){
        const next = cur.next;//后继节点
        cur.next =  pre;
        pre = cur;
        cur = next;
    }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(reverseList(n1));