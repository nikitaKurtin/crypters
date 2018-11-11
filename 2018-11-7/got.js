(()=>{
	//Data
	const got = new Map();
	got.set("Stark", ["Ned", "Rob", "Sansa"]);
	got.set("Lannister", ["Cersei", "Tyrion", "Jaime"]);
	got.set("Targaryen", ["Daenerys", "Aemon"]);
	
	//Variables
	var dragImg;
	var score = 0;
	var maxScore = 0;
	var power = 5;
	
	const scoreView = document.querySelector("h1.score");
	
	//Houses
	const gotHouses = document.querySelector(".exercise>.gotHouses");
	for(const house of got.keys()){
		const section = document.createElement("section");
		section.setAttribute("data-house", house);
		section.addEventListener("dragover",(e)=>{
			e.preventDefault();
		});
		section.addEventListener("drop", game);
		gotHouses.appendChild(section);
	}

	const gotCharacters = document.querySelector(".exercise>.gotCharacters");
	//Characters
	for(const house of got.keys()){
		for(const character of got.get(house)){
			const img = document.createElement("img");
			img.src = character+".jpg";
			img.setAttribute("data-character", character);
			img.addEventListener("drag", (e)=>{
				dragImg = e.target;	
			});
			gotCharacters.appendChild(img);
			maxScore += power;
		}
	}
	//Game
	function game(e){
		const house = e.target.getAttribute("data-house");
		const character = dragImg.getAttribute("data-character");
		if(got.get(house).indexOf(character) >= 0){//match
			score += power;
			scoreView.textContent = score;
			e.target.appendChild(dragImg);
		}else{
			dragImg = null;
			alert("Game over with score "+score);
		}
		if(score == maxScore){
			alert("Well done - you won");
		}
	}
	
	
})();
