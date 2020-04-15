const getUserInfo2 = function(user :{name: string, age: number}) {
  return `name: ${user.name}, age: ${user.age}`
}


console.log(getUserInfo2({name: "刘子民", age: 18}))