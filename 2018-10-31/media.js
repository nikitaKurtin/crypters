const vid = query(".videoContainer>video");
const playPause = query("div.videoContainer>div.btn.playPause");
playPause.addEventListener("click", (e)=>{
	if(vid.paused){
		vid.play();
		playPause.innerHTML = "&#9208;";
	}else{
		vid.pause();
		playPause.innerHTML = "&#9654;";
	}
});
query("div.videoContainer>div.btn.stop").addEventListener("click", (e)=>{
	vid.currentTime = 0;
	vid.pause();
	playPause.innerHTML = "&#9654;";
});
query("div.videoContainer>div.btn.mute").addEventListener("click", (e)=>{
	vid.muted = !vid.muted;
});

function query(selector){
	return document.querySelector(selector);
}

