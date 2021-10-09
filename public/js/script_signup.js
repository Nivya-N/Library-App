let email = document.getElementById("email");
let phone=document.getElementById("phone");
let pwd1=document.getElementById("pwd");
let pwd2=document.getElementById("pwd-confirm");
var strength = document.getElementById('strength');
var strongRegex = new RegExp("(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])");
var mediumRegex = new RegExp(" ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,}))|((?=.*[A-Z])(?=.*[0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{5,}))");
        
// let pattern= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z{2,3}])(.[a-z{2,3}])?$/;
let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var ph_pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// console.log(pwd1);
var meter=document.getElementById("meter_wrapper");
var bar=document.getElementById("meter");
var no=0;
function validate()
{
    if(email.value.trim()==""|| phone.value.trim()==""||pwd1.value.trim()==""||pwd2.value.trim()=="")
        {
            alert("Fields cannot be empty");
            return false;
        }
    else if (!(email.value.match(pattern)))
        {
            alert("Enter mail id in proper format");
            return false;
        }
    else if(!(phone.value.match(ph_pattern)))
        {
            alert("Enter phone number in proper format");
            return false;
        }
    else if(pwd1.value!=pwd2.value)
            {
                alert("Passwords not matching");
                return false;
            }
    else {
        alert('Account created. Please login to continue');
                return true;
            }
    
    
}
function pwdStrength()
{
    if (strongRegex.test(pwd1.value)) 
            {
               strength.innerHTML = '<span style="color:green">Strong </span>';
                meter.style.backgroundColor="green";
                bar.animate({width:'200px'},1000);
                
                // return false;
            } 
        else if (mediumRegex.test(pwd1.value)) 
            {
                strength.innerHTML = '<span style="color:orange">Medium </span>';
                meter.style.backgroundColor="orange";
                bar.animate({width:'130px'},1000);
                // return false;
            } 
        else
            {
               strength.innerHTML = '<span style="color:red">Weak </span>';
               meter.style.backgroundColor="red";
                bar.animate({width:'66px'},1000);
               
                // return false;
            }
            // else 
            // {
            //     no=1;
            // }

}
