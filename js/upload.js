var upload = function() {
    var photo = document.getElementById("photo");
    var file = photo.files[0];

    console.log("File name: " + file.fileName);
    console.log("File size: " + file.fileSize);
    console.log("Binary content: " + file.getAsBinary());
    console.log("Text content: " + file.getAsText(""));

    var preview = document.getElementById("preview");
    preview.src = file.getAsDataURL();

    return false;
};