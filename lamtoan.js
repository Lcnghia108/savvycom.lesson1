var numbers = new Set([7, 11, 96, 4,5]);
let arr = [...numbers];
var sum=0;
for (var num of numbers){
	console.log(num);
	
	sum=sum+num;
}
let temp=` Tổng của tất cả các số là: ${sum} `;
console.log(temp);

arr.map(function(domain, key){
	console.log(`<h1>${domain}</h1>`);
});

var Book = [
{Name: 'Hotgirl Trần Duy Hưng', Author: 'Ánh'},
{Name: 'Cô Giáo Thảo', Author: 'Thủy'}];
Book.map(function(domain, key){
	var tmp=` 
	<div>
	<h1>${Book.Name}</h1>
	<h2>${Book.Author}</h2>
	</div>
	`;
	console.log(tmp);

});

var promise = new Promise(function(resolve, reject){
	reject('Error!');
});
promise.then(
	function(success){
		console.log(success);
	},
	function(error){
		console.log(error);
	}
	);