function imageUploader(){
	var x = document.getElementById("imageFile");
	var display = "";
	if('file' in x){
		if(x.files.length == 0){
			display = "Select one or more files.";
		}else{
			for (var i = 0; i < x.files.length; i++){
				display += "<br><strong>" + (i+1) ". file</strong><br>";
				var file = x.files[i];
				if('name' in file){
					display += "Name: " + file.name + "<br>";
				}
				if('size' in file){
					display += "Size: " + file.size + " bytes<br>";
				}
			}
		}
	}else{
		if(x.value == ""){
			display += "Select one or more files.";
		}else{
			display += "The files property is not supported by your browser!";
		}
	}
	document.getElementById("fileDiaplay").innerHTML = display;
}