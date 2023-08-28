let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)


let arr2= [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]
console.log(arr2)

const person=[
    {name : 'Timur', 'age' : 36, salary : 50000},
    {name : 'Ivan', 'age' : 17, salary : 20000},
    {name : 'Anna', 'age' : 16, salary : 10000},
    {name : 'Oleg', 'age' : 22, salary : 40000},
    {name : 'Lev', 'age' : 20, salary : 60000},
    {name : 'Peter', 'age' : 38, salary : 70000},
    {name : 'Roma', 'age' : 40, salary : 80000},
    {name : 'Igor', 'age' : 43, salary : 90000},
    {name : 'Stas', 'age' : 46, salary : 30000},
    {name : 'Lev', 'age' : 55, salary : 55000}
]
console.log(person)


let newArr = arr[0]
arr[0] = arr[arr.length -1]
arr[arr.length -1] = newArr
console.log(arr)

let findeSome = person.filter(item => item.age>=18)
console.log(findeSome)


findeSome = person.reduce((count, sum) => count+sum.salary, 0)
console.log(findeSome)

findeSome = person.find(some => some.name === 'Lev')
console.log(findeSome)


findeSome = arr.findIndex(arr => arr=== 3)
console.log(findeSome)




