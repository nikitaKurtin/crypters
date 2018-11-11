//Hide inputs when button clicked
document.querySelector("#btn1").addEventListener("click", (e)=>{
   const inputs = document.querySelectorAll("#main>input");
   for(let i=0; i<inputs.length; i++){
     inputs[i].style.display = "none";
   }
});
//Equivalent with jQuery
$("#btn1").click((e)=>{
  $("#main>input").hide();
});

//Example 1
$("#btn2").click(()=>{
	const uName = $("#uName").val();
	if(uName == "Bubu"){
		$("#feed").text("Hello Bubu");
	}
});

//Example 2
const data = {
	"Ned": {src: "Ned.jpg", desc: "Ned stark, head of the family"},
	"Daenerys": {src: "Daenerys.jpg", desc: "Daenerys, Khaleese"},
	"Rob": {src: "Rob.jpg", desc: "Rob Stark, wolf something"},
	"Jaime": {src: "Jaime.jpg", desc: "Jaime, King slayer"}
};
for(const key in data){
	const img = "<img data-name='"+key+"' src='"+data[key].src+"' />";
	$("#imagesLine").append(img);
}
$("#imagesLine>img").click((e)=>{
	const charName = $(e.target).attr("data-name");
	const character = data[charName];
	$("#result>img").hide().fadeIn().attr("src", character.src);
	$("#result>h2").text(character.desc);
});