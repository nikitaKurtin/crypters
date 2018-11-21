$("ul.movies>li").click((e)=>{
	$(".modal").modal();
	$(".selected-movie").text($(e.target).text());
});