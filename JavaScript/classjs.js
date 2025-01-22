class user {
  constructor(name, email) {
    this.name=name
    this.email = email;
  }
  #courseList=[]
  getInfo(){
    return {name:this.name , email:this.email}
  }
  enrolledCourse(name){
    this.#courseList.push(name)
  }
  getCourseList(){
    return this.#courseList
  }
  static login(){
    return "i am logged in"
  }
}

class subAdmin extends user{
    constructor(name, email){
        super(name,email)
    }
}


const tom=new subAdmin("tom", "tom@jerry.om")

console.log(tom.getInfo());
// console.log(tom.login());

tom.enrolledCourse("javascript bootcamp")
const courseList1=tom.getCourseList()
console.log(courseList1);

console.log(tom.courseList);    //it gives undefined

// const siddharth=new user("siddharth", "siddharth@dev")

// siddharth.enrolledCourse("react bootcamp")
// siddharth.enrolledCourse("angular bootcamp")

// const courses=siddharth.getCourseList()
// // console.log(courses);

// courses.forEach((c)=> console.log(c)
// )

// console.log(siddharth.getInfo());
