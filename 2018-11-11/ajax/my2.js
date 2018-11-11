//AJAX -> Asynchronous Javascript And XMLHttpRequest

//XMLHttpRequest simple example
const req = new XMLHttpRequest();
req.addEventListener("load", (e)=>{
	console.log(e.target.response);
});
req.open("GET", "./names.txt");
req.send();

//Equivalent with .ajax of jQuery
$.ajax({
	url: "./names.txt",
	method: "GET"
}).done((data)=>{
	console.log(data);
});

//Equivalent -> shortcut
$.get("./names.txt", (data)=>{
	console.log(data);
});

//Example - load and parse data
$.get("./names.txt", (data)=>{
	const names = data.split(",");
	for(const name of names){
		$("#namesList").append("<li>"+name+"</li>");
	}
});

//Example 2 - with csv
$.get("./example.csv", (data)=>{
	const rows = data.split("\n");
	for(const row of rows){
		const cols = row.split(",");
		let tr = "<tr>";
		for(const col of cols){
			tr += "<td>"+col+"</td>";
		}
		tr += "</tr>";
		$("#tblData").append(tr);
	}
});










