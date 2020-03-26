package main

import (
	"fmt"
)

// 矩形类 OO GO
type Rectangle struct { // constructor
	Length int
	Width  int
}

// prototype  火车头 prototype  方法
func (r *Rectangle) Area() int {
	// this
	return r.Length * r.Width
}

func main() {
	r := Rectangle{4, 2} // go 面向对象
	fmt.Println(r.Area())
}
