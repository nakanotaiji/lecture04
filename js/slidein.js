var endSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
=======
	foxkeh.setAttribute("class", "slidein");
>>>>>>> master
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
