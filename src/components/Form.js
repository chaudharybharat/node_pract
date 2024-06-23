import { useState } from "react";

function Form(){
    const inittalValue={
        name:"",
        email:"",
        password:""
    };
    const [formData,setFromData]=useState(inittalValue);
const handleSubmit =(e) =>{
    e.preventDefault();
    alert(JSON.stringify(formData,undefined,2));
}


return(
    <form>
    <lable>Name</lable>
    <input type="text" value={formData.name} onChange={(e)=>setFromData({...formData,name:e.target.value})}/>
    <br/>
    <lable>Email</lable>
    <input type="email" value={formData.email} onChange={(e)=>setFromData({...formData,email:e.target.value})}/>
    <br/>
    <lable>Pasword</lable>
    <input type="password" value={formData.password} onChange={(e)=>setFromData({...formData,password:e.target.value})}/>
    <br/>
    <button type="submit" onClick={handleSubmit}>submit</button>
    <p>{JSON.stringify(formData)}</p>
    </form>
);

}

export default Form;