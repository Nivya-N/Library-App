let title = document.getElementById("title");
let auth = document.getElementById("author");
let genre = document.getElementById("genre");
let img = document.getElementById("img");
function validate()
{
    var filePath = img.value;
    var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(title.value==""||auth.value==""||genre.value==""||img.value=="")
    {
        alert("All fields must be filled");
        return false;
    }
    else if(!allowedExtensions.exec(filePath))
    {
        alert('Invalid file type');
        return false;
    }
    else{
        alert("Success");
        return true;
    }
}