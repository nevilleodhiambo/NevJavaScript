// //objects and methods 

// var user = {
//     firstName : "Neville",
//     lastName : "Odhiambo",
//     role : "Admin",
//     logginCount : 34,
//     faceBookSignIn : true,
//     courseList: [],
//     buyCourse: function (courseName){
//         this.courseList.push(courseName);
//     },
//     getCourseCount: function (){
//         return `${this.firstName} is enrolled in total in ${this.courseList.length} courses`
//     },
// }
// var courseList = true;

// console.log(user.firstName);
// console.log(user.getCourseCount());
// user.buyCourse("React js Course");
// console.log(user.getCourseCount());


var user = {
    firstName: "Neville",
    lastName: "Odhiambo",
    role: "Admin",
    age: 34,
    isFacebookLogged: true,
    courseList : [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    popCourse(){
        this.courseList.pop();
    },
    enrollCourse: function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
    info: function (){
        return `
        ${user.firstName},
        ${user.lastName},
        ${user.role},
        ${user.age},
        ${user.isFacebookLogged},
       learning the following courses: ${user.courseList},
        ${user.enrollCourse()},
        
        `;
    }
}
// console.log(user);
console.log(user.enrollCourse());

user.buyCourse("React JavaScript");
user.buyCourse("Vue JavaScript");
user.buyCourse("Angular JavaScript");
console.log(user.info());
// user.popCourse();
// console.log(user.info());
