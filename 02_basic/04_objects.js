// const tinderUser = new Objects()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Aman";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aman",
      lastname: "mittrpriya",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 1,
    email: "a@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggLoggedIn"));



const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "aman"
}

// course.courseInstructor


const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// {
//   name: "aman",
//   coursename: "js in hindi",
//   price: "free"
// }

[
  {},
  {},
  {},
]