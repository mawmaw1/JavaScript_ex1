/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var myVar1 = 5;
//function myFunc(){
//    
//    var myVar2 = 10;
//    console.log(myVar2);
//    
//}
//myFunc();
//console.log(myVar1);
//
//var myArray = ["Hans","per","oliver"];
//for(var i = 0; i<myArray.length;i++){
//    console.log(myArray[i]);
//}



//var student = "Morten";
//var noOfStudents = 20;
//var isStudent = true;
//console.log(student);
//console.log(noOfStudents);
//console.log(isStudent);
//
//var myObject = {studentid:1, Studentname:"Per",Studenage:18};
//
//var myArray = [false, 10, "per", myObject,20];
//for(var i = 0;i<myArray.length;i++){
//    console.log(myArray[i]);
//}

//Opgave 3
//var person1 = {studentId: 1, studentName: "Jens", toString: function () {
//        return this.studentName + " " + this.studentName;
//    }};
//var person2 = {studentId: 2, studentName: "per", toString: function () {
//        return this.studentName + " " + this.studentName;
//    }};
//var person3 = {studentId: 3, studentName: "Dorte", toString: function () {
//        return this.studentName + " " + this.studentName;
//    }};
//
//var studArray = [person1, person2, person3];
//
//
//
//for (var i = 0; i < studArray.length; i++) {
//    console.log(studArray[i]);
//}

//var stud1 = {name: "Per", age: 18, isFemale: false};
//var stud5 = {name: "Kirstn", age: 25, isFemale: true};
//var stud2 = {name: "Mogens", age: 15, isFemale: false};
//var stud3 = {name: "Dorte", age: 12, isFemale: true};
//var stud4 = {name: "Misse", age: 19, isFemale: true};


//
//
////opgave 4:
//var list = {arr: [stud1, stud2,stud5, stud3, stud4], findYoung: function () {
//        var youngest = this.arr[0].age;
//        var name = this.arr[0].name;
//        for (var i = 0; i < this.arr.length; i++) {
//            if (this.arr[i].age < youngest) {
//                youngest = this.arr[i].age;
//                name = this.arr[i].name;
//            }
//
//        }
//        console.log("This person is youngest: " + name);
//    }, findFemale: function () {
//       for(var i = 0;i<this.arr.length;i++){
//           if(this.arr[i].isFemale){
//               console.log(this.arr[i].name);
//           }
//       } 
//    }
//};
//
//
//
//list.findYoung();
//list.findFemale();
//// opgave 5
//var studArrayUnsort = [stud1,stud2,stud3,stud4,stud5];
//studArrayUnsort.sort();
//
//
//function sortArr(arr,student){
//    for(var i = 0;i<arr.length;i++){
//        if(arr[i] === student){
//            arr.splice(i, 1);
//        }
//    }
//   
//    for(var i=0;i<arr.length;i++){
//        console.log(arr[i]);
//    }
//};
//sortArr(studArrayUnsort,stud5);
//

////opgave 6
//var stud1 = {name: "Per", age: 35, isFemale: false};
//var stud5 = {name: "Kirstn", age: 54, isFemale: true};
//var stud2 = {name: "Mogens", age: 33, isFemale: false};
//var stud3 = {name: "Dorte", age: 12, isFemale: true};
//var stud4 = {name: "Misse", age: 49, isFemale: true};
//
//var studArrayUnsort = [stud1,stud2,stud3,stud4,stud5];
//
//studArrayUnsort.forEach(function(elem){
//    if (elem.age > 30){
//        console.log(elem.name);
//    }
//});
//
////opgave 7
//function maxFunc(){
//    res = 0;
//    for(var i = 0; i<arguments.length;i++){
//        if (arguments[i] > res){
//            res = arguments[i];
//        }
//    }
//    console.log(res);
//}
//
//maxFunc(5,3,6,55558,122,7,8,1132);


////opgave 8

//var d = new Date();
//var weekday = new Array(7);
//weekday[0] =  "Sunday";
//weekday[1] = "Monday";
//weekday[2] = "Tuesday";
//weekday[3] = "Wednesday";
//weekday[4] = "Thursday";
//weekday[5] = "Friday";
//weekday[6] = "Saturday";
//
//console.log(weekday[d.getDay()]);

////opgave 9


//var tiger = {name:"Janni", race:"Tiger",age:18,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var lion = {name:"hanne", race:"Lion",age:15,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var bird = {name:"Per", race:"Bird",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//var fish = {name:"Jan", race:"Fish",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//
//var arr = [tiger,lion,bird,fish];
//for(var i = 0;i<arr.length;i++){
//    console.log(arr[i]);
//}

////opgave 10
//var tiger = {name:"Janni", race:"Tiger",age:18,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var lion = {name:"hanne", race:"Lion",age:15,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var bird = {name:"Per", race:"Bird",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//var fish = {name:"Jan", race:"Fish",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//
//var arr = [tiger,lion,bird,fish];
//
//arr.filter(myFunc);
//
//function myFunc(elem){
//    if(elem.isMammal){
//        console.log(elem);
//    }
//}

////opgave 11

//var tiger = {name:"Janni", race:"Tiger",age:18,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var lion = {name:"hanne", race:"Lion",age:15,isMammal:true, toString:function() {return this.name + " " + this.isMammal;}};
//var bird = {name:"Per", race:"Bird",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//var fish = {name:"Jan", race:"Fish",age:18,isMammal:false, toString:function() {return this.name + " " + this.isMammal;}};
//
//var arr = [tiger,lion,bird,fish];
//
//var res = arr.map(myFunc);
//
//function myFunc(elem){
//    return elem.name;
//};
//for(var i = 0;i<res.length;i++){
//    console.log(res[i]);
//}

var table = document.createElement("table");

var stud1 = {name: "Per", age: 35, isFemale: false};
var stud5 = {name: "Kirstn", age: 54, isFemale: true};
var stud2 = {name: "Mogens", age: 33, isFemale: false};
var stud3 = {name: "Dorte", age: 12, isFemale: true};
var stud4 = {name: "Misse", age: 49, isFemale: true};

var studArrayUnsort = [stud1, stud2, stud3, stud4, stud5];

studArrayUnsort.forEach(function (elem) {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");

    var td2 = document.createElement("td");
    var nameEle = document.createTextNode(elem.name);
    td1.appendChild(nameEle);
    var ageEle = document.createTextNode(elem.age);
    td2.appendChild(ageEle);
    row.appendChild(td1);
    row.appendChild(td2);
    table.appendChild(row);

});
var insertPoint = document.getElementById("personView");
insertPoint.appendChild(table);