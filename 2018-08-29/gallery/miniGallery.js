(function(){//self calling - encapsulating function
	const aside = document.querySelector("aside");

	function populateSmallImgs(){
		const srcs = ["groot.jpg", "gamora.jpg", "drax.jpg", "quill.jpg"];
		var imgs = "";
		for(const src of srcs){
			imgs += "<img src='"+src+"' onclick='showBigImg(\""+src+"\")' />";
		}
		aside.innerHTML = imgs;
	}

	populateSmallImgs();
})();

function showBigImg(src){
	const bigImg = document.querySelector("section>img.bigImg");
	bigImg.src = src;
}