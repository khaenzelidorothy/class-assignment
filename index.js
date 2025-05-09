//You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string),
//  isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) 
// to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}
FeatureToggle.prototype.canAccess = function(userRole){
    if(userRole == "admin"|| userRole =="developer"){
        return true
    }
    else{
        return false
    }
}
FeatureToggle.prototype.toggleFeature = function(flag){
    if(flag == "true"){
        
    }
}
FeatureToggle.prototype.accessAttempts = function(){
    
}

const featuretoggle = new FeatureToggle("signup","true",[""])

//In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails
//  (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total
//  earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

// function Timelog(freelancerName,projectDetails,logs){
//     this.freelancerName = freelancerName;
//     this.projectDetails = projectDetails;
//     this.logs = logs;
// }
// Timelog.prototype.totalEarnings = function(){
//     let earnings = this.logs.hoursWorked.reduce((acc,curr)=>acc+curr,0)
//     return earnings*this.projectDetails.hourlyRate;
// }
// Timelog.prototype.filterLog = function(){
// //    let filteredDate= this.logs.date.filter(14<date<20)
//    if(earnings>40){
//     return "exceed";
//    }
//    else{
//     return "not exceeded"
//    }
// }
// const timelog = new Timelog("John",{name:"peter",hourlyRate:35.0},[{date:14,hoursWorked:16},{date:17,hoursWorked:22}])
// console.log(timelog.totalEarnings());
// console.log(timelog.filterLog());





//You are developing a startup’s order management system where an Order constructor function should contain customer (object with name
//  and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods
//  to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements

function Order(customer,items,status){
    this.customer = customer;
    this.items = items;
    this.status = status;
}
Order.prototype.totalCost = function(){
    let cost = this.items.map(item =>
        item.quantity*item.unitPrice
    );
    let sumCost = cost.reduce((acc,curr)=> acc+curr,0)
    return sumCost;
}
Order.prototype.orderStatus = function(payment){
    if(payment== this.sumCost){
        return(this.status = "paid")
    }
    else{
        return (this.status)
    }
}
Order.prototype.orderUrgency = function(){
    if(quantity >= 25){
        return "High priority"
    }
    else{
        return "low priority"
    }
}
const order = new Order({customerName:"Samu",email:"samu@gmail.com"},[{productName:"biscuits",quantity:25,unitPrice:54.5},{productName:"mangoes",quantity:32,unitPrice:38.2}],"not paid");
console.log(order.totalCost());
console.log(order.orderStatus(2500));
console.log(order.orderUrgency());




//In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object 
// with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average
//  score, classify performance level using control flow, and add new feedback based on conditions.

function Employee(id,name,performanceMetrics,feedback){
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
}
Employee.prototype.averageScore = function(){

}
Employee.prototype.performanceLevel = function(){

}
Employee.prototype.addFeature = function(){

}

const employee = new Employee(203,"Lennox",{communication:"good",efficiency:"fluent",reliability:"very reliable"},["need","bad","easy"])


//Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and 
// students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the 
// course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title, instructor,students){
    this.title = title;
    this.instructor = instructor;
    this.students = students;
}}
Course.prototype.studentsName = function(){
    if(this.students.completionStatus=="completed"){
        return this.students.name
    }
}
Course.prototype.countEnrolled = function(){
     let count = 0;
    let counting = this.students.forEach(student =>{
        student.name =
         count ++
    })
    return counting
}
Course.prototype.instructorMessage = function(){

}

const course = new course("Biology",{name:"Nelly",expertise:"plantology"},[{name:"kevin",completionStatus:"completed"},{name:"merry",completionStatus:"not completed"}]);
console.log(course.studentsName());
console.log(course.countEnrolled());
console.log(course.instructorMessage());






 
 









