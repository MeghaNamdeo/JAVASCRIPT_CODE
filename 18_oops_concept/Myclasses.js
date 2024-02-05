//ES6
class User{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password
    }

    ecryptPassword(){
           return `${this.password}abc`
    }
}  

const chai= new User("chai","chai@123","123")