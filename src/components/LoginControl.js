import { useState } from "react";
function LoginControl(){
 const [isLoggedIn,setIsLoggedIn]=useState(false);
    
const hanldeLoginClick=()=>{
    setIsLoggedIn(true);
}
const handleLogutClick =()=>{
    setIsLoggedIn(false);
}
let button;
if(isLoggedIn){
    button=<LogOutButton onClick={handleLogutClick}></LogOutButton> 
}else{
    button=<LoginButton onClick={hanldeLoginClick}></LoginButton> 
}


return (
    <div>
        {button}
    </div>
) 

}

function LoginButton(props){
   return(<button onClick={props.onClick}>Login</button>);
}
function LogOutButton(props){
    return(<button onClick={props.onClick}>Logout</button>);
 }

export default LoginControl;


