// asd
interface IUser {
  name: string;
  age: number
}
const getUserInfo = (user:IUser): string => {

  return `name: ${user.name}, age: ${user.age}`
}

getUserInfo({name: '刘子民', age: 18})