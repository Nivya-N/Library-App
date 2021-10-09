let user = document.getElementById('user1');
let pwd = document.getElementById('pwd');
//console.log(user.value,pwd.value);
function validate()
{
if (user.value=='admin'&& pwd.value=='12345')
{
    alert('success');
   //windows.location.href='books.ejs';
    return true;

}
else{
    alert('Wrong user id or password');
    return false;
}
}