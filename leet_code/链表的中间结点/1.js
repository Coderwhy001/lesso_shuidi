// var middleNode = function(head) {
//   let A = [head];
//   while(A[A.length-1].next != null) {
//     A.push(A[A.length-1].next)
//   }
//   return A[Math.trunc(A.length/2)]
// }; 

var middleNode = function(head) { // 快慢指针
  let slow = fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
};