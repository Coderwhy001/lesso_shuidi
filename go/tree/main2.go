package main

import "fmt"

type Node struct {
	value int
	left  *Node
	right *Node
}

func (node *Node) FindNode(n *Node, x int) *Node {
	if n == nil {
		return nil
	} else if n.value == x {
		return n
	} else {
		p := node.FindNode(n.left, x)
		if p != nil {
			return p
		}
		return node.FindNode(n.right, x)
	}
}
func (node *Node) GetTreeHeight(n *Node) int {
	if n == nil {
		return 0
	} else {
		lHeight := node.GetTreeHeight(n.left)
		rHeight := node.GetTreeHeight(n.right)
		if lHeight > rHeight {
			return lHeight + 1
		} else {
			return rHeight + 1
		}
	}
}
func (node *Node) GerLeafNode(n *Node) {
	if n != nil {
		if n.left == nil && n.right == nil {
			fmt.Printf("%d", n.value)
		}
		node.GerLeafNode(n.left)
		node.GerLeafNode(n.right)
	}
}
func (node *Node) PreOrder(n *Node) {
	if n == nil {
		return
	} else {
		fmt.Print(n.value, " ")
		node.PreOrder(n.left)
		node.PreOrder(n.right)
	}
}
func (node *Node) MidOrder(n *Node) {
	if n == nil {
		return
	} else {
		node.MidOrder(n.left)
		fmt.Print(n.value, " ")
		node.MidOrder(n.right)
	}
}
func (node *Node) LastOrder(n *Node) {
	if n == nil {
		return
	} else {
		node.LastOrder(n.left)
		node.LastOrder(n.right)
		fmt.Print(n.value, " ")
	}
}
func CreateNode(value int) *Node {
	return &Node{value, nil, nil}
}

func main() {
	//      5
	// 2         4
	//    7   8     9
	//  6
	root := CreateNode(5)
	root.left = CreateNode(2)
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)
	// fmt.Println("%d\n", root.FindNode(root, 4).value)
	// fmt.Printf("%d\n", root.GetTreeHeight(root)) // 树的高度  递归
	// root.GerLeafNode(root)
	fmt.Println("前序遍历")
	root.PreOrder(root)
	fmt.Println("")
	fmt.Println("中序遍历")
	root.MidOrder(root)
	fmt.Println("")
	fmt.Println("后序遍历")
	root.LastOrder(root)
}
