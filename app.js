let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)


let arr2= [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]
console.log(arr2)


const person = {
     'Timur' : 'street 33', 
     'Valya' : 'street 23',
     'Anna' : 'street 25',
     'Peter' : 'street 67', 
     'Lena' : 'street 87',
     'Ivan' : 'street 99',
     'Lev' : 'street 44', 
     'Alex' : 'street 54',
     'Roma' : 'street 24',
     'Rita' : 'street 32'
     
}
console.log(person)



let arr3 = []
for(let i = 0; i<arr2.length; i++){
  var arr_in = [];
  for(let p = 0; p<arr2[i].length; p++){
    arr_in.push(arr2[i][p] + ' ' + i + ':' + p)
    //arr3[i][p] = '';
    }
  arr3.push(arr_in);
}
 console.log(arr3)



let numbers = []
Object.values(person).forEach(val => numbers.push(+val.replace(/\D+/,'')))

console.log(numbers)


 let redNum = []
 for(let i= 0 ; i<arr3.length; i++){
    arr_out = []
    for(let p= 0 ; p<arr3[i].length; p++){
    arr_out.push(parseInt(arr3[i][p]))
       
    }
     arr_out= arr_out.reduce((a,b)=> a+b, 0)
    redNum.push(arr_out)
 }

 
let sumArr3 = redNum.reduce((count, sum) => count+sum, 0)
console.log(sumArr3)


findeSome = Object.values(person).find(item => item === 'street 23')
console.log(findeSome)


findeSome2 = arr.findIndex(arr => arr=== 3)
console.log(findeSome2)


