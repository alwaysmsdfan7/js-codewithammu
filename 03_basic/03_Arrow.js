const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}


// user.welcomeMessage()
// user.username = "ammu"
// user.welcomeMessage()

// console.log(this);

// function ammu(){
//     let username = "Aman"
//     console.log(this.username);
// }

// ammu()


// const ammu = function () {
//     let username = "Aman"
//     console.log(this.username);
// }

const ammu = () => {
    let username = "Aman"
    console.log(this);
}


// ammu()

//  const addTwo = (num1, num2) =>{
//     return num1 + num2
//  }

//  const addTwo = (num1, num2) => num1 + num2
 
// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "Aman"})

 console.log(addTwo(3,4))


 const myArray = [2, 5, 3, 7, 8]


//  myArray.forEach()