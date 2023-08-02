validate=()=>
{
    let a=document.getElementById("usernamevalid").value 
    let b=document.getElementById("Passwordvalid").value 
    if(a===b)
    {
            window.location.href = "orders.html"
    }
    else
    {
        document.getElementById("error").innerHTML="*Username and Password are not same"
    }
}