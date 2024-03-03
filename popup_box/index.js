
function myFunction(){
    var Name=document.getElementById("username").value; 
    if (Name.trim() === '') {
        alert('please enter the name');
    } else {
        alert('Hello '+ Name );
    }
}  