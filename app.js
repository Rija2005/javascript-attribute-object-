// //ATTRIBUTE:TO GET THE ATTRIBUTR VALUE
// const div = document.querySelector("div");
// console.log(div);
// const att = div.getAttribute("class")
// console.log(att);//attribute will print i.e;class name container.


// let paragraph = document.querySelector("p");
// console.log(paragraph.setAttribute("id","content"));//set attribute ;replace or pass id for the tag

// paragraph.style.backgroundColor="blue";
// paragraph.style.color="red"
// paragraph.style.fontSize="32px"





// //node;;append;add the end of the node by using create element
// let newBtn = document.createElement("button");
// newBtn.innerText= "sumbit";//innerText use to pass a text 
// console.log(newBtn);//just button create

// let add = document.querySelector("div")
// add.append(newBtn)


// add.after(newBtn)//after div tag

// add.before(newBtn)//before div

// add.prepend(newBtn)//add the start of div

// add.remove//use to remove any content from html codee.........

// //image swapping
// function swapImage(){
//     document.getElementById("swap").src ="./image2.jfif"
// }

// //image swapping through method
// function swapImages(swap,newPic){
//     document.getElementById("swaps").src=newPic
// }

// function swapLink(){
//     var linked = document.getElementById("link")
//     linked.href="https://buffer.com/library/free-images/"
// }//verbose approach;;swappinf of link is called VERBOSE APPROACH




// //event object:add many more data we want n if want to delete specific data you can delete it 

// let student={
//     firstName:"Rija",
//     lastName:"Fatima",
//     rollNo:"25",
//     age:18,
//     class:"XI",
//     fullName:function(){
//         return this.firstName
//     }//function is called as method in object code


// }
// console.log(student);



// let plan1={
//     name:"Basic",
//     price:3.99,
//     space:1.00,
//     transfer:1000,
//     pages:10,

//     discountMonths: [6, 7],

//     calcAnnual: function(percentIfDisc) { var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) { if (this.discountMonths[i] === thisMo) {
//         bestPrice = this.price * percentIfDisc; break;







//         }
//         }
//         return bestPrice * 12;
// }
// };




// console.log(plan1);
// delete plan1.space;


// const person ={

// }
// //you can add value byt his method also
// person.name="john"
// person.age=24;
// person.email="john22@gmail.com"


// document.getElementById("demo").innerHTML=person.name+ "is"+person.age+"year old"
// console.log(person);


//object constructor

function Student(name, father_name, age, cls) {
      this.name = name;
      this.fathername = father_name;
      this.age = age;
      this.class = cls
}

let student1 = new Student("Rija", "Ali", "19", "XI")
let student2 = new Student("Maha", "M,khan", "23", "XIII")
console.log(student1);
console.log(student2);
///constructor function ::firstly create function then make variable and pass value like 

function Plan(name, price, space, transfer, pages) {
      this.doc = name;
      this.grumpy = price;
      this.sleepy = space;
      this.bashful = transfer;
      this.sneezy = pages;
}
Student.prototype.email="rija@gmail.com"
console.log(student1);