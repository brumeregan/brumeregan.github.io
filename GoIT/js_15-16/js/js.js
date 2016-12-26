'use strict';

function GoogleCallback(func, data){
	window[func](data);
}


$(function(){

	//event

	$('form').on('submit', function(e){
		e.preventDefault();
		var pageIndex = 0;
		sendRequest(pageIndex);
	});

	function sendRequest(pageIndex){

		var queryText = $('.form__text').val(); // search text

		var pagesNumber = 10;

		var keyAPI = "ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg";

		var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=" +
							keyAPI + " &rsz=large&start=" + pageIndex + "&q=" + queryText + "&callback=GoogleCallback&context=?";
   
		$.ajax({
			url: url,
			dataType: "jsonp",
			success: function(data){
				var ul = document.createElement('ul');
				ul.classList.add('search__content');
				$.each(data.results, function(i, val){
					var li = document.createElement("li");
	            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
	            ul.appendChild(li);
        });

        //CHANGING VIEW 
        $('.form').css({
        	position: 'relative',
        	top: 0
        }).find('.form__img').css({
        	display: 'inline-block',
        	'max-width': '100px',
        	'vertical-align': 'middle'
        });
			
				var resultPagination = document.createElement('ul');
				resultPagination.classList.add('pagination');

				for (var i = 0; i < pagesNumber; i++){
					var li = document.createElement('li');
					var a = document.createElement('a');
					a.innerHTML = i + 1;
					a.setAttribute('href', 'http://more');
					a.classList.add('search__more');
					li.appendChild(a);
					resultPagination.appendChild(li);
				}

				var nextP = document.createElement('li');
				var nextL = document.createElement('a');
				nextL.classList.add('next');
				nextL.setAttribute('href', 'http://next');
				nextL.innerHTML = '>>';
				nextP.appendChild(nextL);
				resultPagination.appendChild(nextP);
				var prevP = nextP.cloneNode();
				var prevL = nextL.cloneNode();
				prevL.classList.remove('next');
				prevL.classList.add('prev');

				prevL.innerHTML = '<<';
				prevP.appendChild(prevL);
				resultPagination.insertBefore(prevP, resultPagination.childNodes[0]);

				$('.search').html(resultPagination).append(ul);

				function setPagination(pageIndex){
					var $link = $('.search__more');
		
					$.each($link, function(i){

						$link.eq(i).on('click', function(e){
							e.preventDefault();
							sendRequest(i);
						});
					});

					$('.next').eq(0).on('click', function(e){
						e.preventDefault();
						sendRequest(pageIndex + 1);
					});

					$link.eq(pageIndex).addClass('active');

					$('.prev').eq(0).on('click', function(e){
						e.preventDefault();
						if(pageIndex == 0){
							return false;
						}
						sendRequest(pageIndex - 1);
					});

				}

				setPagination(pageIndex);

			},		 //end of success

			error: function(){
				var errorM = document.createElement('div');
				errorM.classList.add('error');
				errorM.innerHTML = "Что-то пошло не так О_О Попробуйте позже";
				$('.search').html(errorM);
				alert('error');
			}

		}); //end $.ajax

	} // end sendRequest


//classes and prototypes

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
			alert(this.name +' watch Game of Thrones');
		}else{
			alert('Student watch Game of Thrones');
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

});