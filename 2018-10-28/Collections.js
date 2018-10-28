//Array as Stack
const names = ["Bubu", "Deadpool", "Groot", "Nebola", "Yondu", "Mantis"];
names.push("Drax");
names.push("Gamora");
names.push("Thor");
console.log(names.pop());
console.log(names.pop());

//Array as Queue
console.log(names.shift());
console.log(names.shift());

//add "spiderman" at index 1 and move everything accordingly
names.splice(1, 0, "Spiderman");

//remove value at index 2 and move everything accordingly
names.splice(2, 1);

//replace 2 values from index 2 with values "Dani", "Idan"
names.splice(2, 2, "Dani", "Idan");

console.log(names.length);
console.log(names);

//Set
const set = new Set();
set.add(15);
set.add(8);
set.add(3);
set.add("Bubu");
set.add(3);
set.add("Bubu");
set.add(15);
console.log(set.size);
console.log(set);

//Before ES6 - we used object as Dictionary
const o = {Drax: 50};
console.log(o.Drax);
console.log(o["Drax"]);
o["Bubu"] = 100;
o["Groot"] = 80;
console.log(o);

//After ES6 - we can use Map
const map = new Map();
map.set("Drax", 50);
map.set("Bubu", 98);
map.set("Groot", 60);
console.log(map);
console.log(map.size);

//Iterations

//Iterate over array(List,Queue,Stack)
for(const n of names){
	console.log(n);
}
//Iterate over Set
for(const val of set){
	console.log(val);
}
//Iterate over Map entries each entry is an array of [key, value]
for(const entry of map){
	console.log(entry);
}
//Iterate over Map keys
for(const key of map.keys()){
	console.log(key);
}
//Iterate over Map values
for(const val of map.values()){
	console.log(val);
}

//TypedArray - ES6 
const bytes = new Int8Array(4);
bytes[0] = 127;
bytes[3] = 1;
console.log(bytes);

const shorts = new Int16Array(4);
shorts[0] = 1000;
shorts[1] = "Bubu is the king";//ignored
shorts[2] = 66000;//overflow
shorts[3] = 5673;
shorts[4] = 111;//ignored
console.log(shorts);
console.log(shorts.length);


//Exercise
function findMissing(arr){
	arr = new Int8Array(arr);
	var sum = 0, max = 0;
	for(const n of arr){
		sum += n;
		if(max < n)max = n;
	}
	return (max * (max + 1) / 2) - sum;
}






