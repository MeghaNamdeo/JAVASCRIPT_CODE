function SetUername(username)
{
    this.username=username
}

function createUser(username,email,password)
{
    //SetUername(username)//ye call nahi ho para 

    SetUername.call(username)
    //this.username=username
    this.email=email
    this.password=password
}
const chai = new createUser("chai","chai@123","123")
console.log(chai);