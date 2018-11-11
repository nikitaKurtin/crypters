const audio = document.querySelector(".audioContainer>audio");

function playSong(){
	audio.play();
}

function stopSong(){
	audio.pause();
	audio.currentTime = 0;
}

var draggingImage;

function dragMe(elem){
	draggingImage = elem;
}

(()=>{
	const sections = document.querySelectorAll(".imageContainer>section");
	for(let i=0; i<sections.length; i++){
		sections[i].addEventListener("dragover", (e)=>{
			e.preventDefault();
		});
		sections[i].addEventListener("drop", (e)=>{
			e.target.appendChild(draggingImage);
		});
	}
})(); 