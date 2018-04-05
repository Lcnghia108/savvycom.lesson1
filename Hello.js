var hello = (sex, name, message) => {
	console.log("Em chào "+sex+name+", "+message);
};

hello ('anh',' Thành đẹp trai khoai to', 'Ngày mới vui vẻ nhé');

var domain = ["dantri.com.vn", "vnexpress.net", "luuchinghia.com"];
domain.map((val, key) => {
	console.log(val.toUpperCase());
});
setTimeout( () => {
	console.log('4 giây trôi qua') }, 4000);

let date = {
	day: 10,
	month: 04,
	year: 2018
}

let {month: m} = date;
//console.log("Hôm nay là \nNgày: " +d);
console.log(" Tháng", +m);
//console.log(" Năm", +y);

let Say = ["Ahihi", " Đồ ngốc"];
let [Chao, Hoi]= Say;
console.log(Chao+Hoi);

function sayGoodbye(say= 'Goodbye u')
{
	return say;
}
console.log(sayGoodbye('See u soon'));