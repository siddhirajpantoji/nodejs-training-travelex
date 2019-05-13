

// Types to create object // var obj = {
//     "name":"Priyanka",
//     print: function(){
//         return this.name;
//     }
// }
// console.log(obj);
// console.log(obj.print())


function Employee1(name){
    return {
        name:name,
        print :function(){
            console.log(this.name);
        }
    }
}
var e1 = new Employee1("Sidd");
e1.print();
console.log(typeof e1);
console.log(e1)

class Employee {
    
    constructor(name){
        this.name = name;
        this.print = function (){
            console.log(this.name);
        }
    }
    
}
 var e1 = new Employee("Sidd");
  e1.print();
  console.log( typeof e1)
  console.log( e1)