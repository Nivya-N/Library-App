let name = document.getElementById("name");
let img = document.getElementById("img");
function validate()
{
    var filePath = img.value;
    var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(name.value==""||img.value=="")
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