'use strict';

function Human(name, age, sex, height, weight){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.height = height;
	this.weight = weight;
}

function Worker(position, salary){
	this.position = position;
	this.salary = salary;
}

Worker.prototype = new Human();
Student.prototype = new Human();

Worker.prototype.work = function(){
  alert(this.name + ' can work!');
}

//cheking prototypes of Student and Worker
window.console.log("прототип студента", Student.prototype);
window.console.log("прототип рабочего", Worker.prototype);

function Student(education, scholarship){
	this.education = education;
	this.scholarship = scholarship;
	this.watchTV = function(){
		if(this.name){
			alert(this.name +' can watch Game of Thrones');
		}else{
			alert('Student can watch Game of Thrones');
		}
	}
}

//creating wrkers and students
var worker1 = new Worker('trader', 2000);
worker1.name = 'Vasya';
worker1.work();

var worker2 = new Worker('policeman', 1000);
worker2.name = 'Peter';
worker2.age = '30';

var worker3 = new Worker('cheif', 1500);
worker3.name = "Jane";
worker3.age = '40';
worker3.sex = 'female';

var worker4 = new Worker('sportsman', 3000);
worker4.name = "Alan";
worker4.age = "18";
worker4.sex = "male";
worker4.height = "188";
worker4.weight = "79";

var student1 = new Student('MIT', 1000);
student1.name = 'Alice';
student1.age = '20';
student1.watchTV();

var student2 = new Student('Oxford', 400);
student2.name = 'Alex';
student2.weight = '90';

//checkiing
console.log("worker1", worker1);
console.log("worker2", worker2);
console.log("worker3", worker3);
console.log("worker4", worker4);

console.log("student1", student1);
console.log("student2", student2);