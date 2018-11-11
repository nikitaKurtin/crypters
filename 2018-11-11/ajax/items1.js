$.get("./items.json",(data)=>{
	for(const obj of data.hits){
		const name = obj._source.info.fullName;
		let className = "low";
		if(obj._source.requirements && obj._source.requirements.Level){
			const lvl = obj._source.requirements.Level;
			className = lvl > 50 ? "high" : lvl > 30 ? "medium" : className;
		}
		$("#itemsList").append("<li class='"+className+"'>"+name+"</li>");
	}
});