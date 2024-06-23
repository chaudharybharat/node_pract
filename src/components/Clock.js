import userEvent from "@testing-library/user-event";
import React,{useState,useEffect} from "react";



function Clock(){
    const [time,setTime] = useState(new Date().toString());
    const [flag,setFlag] =useState(true);

useEffect(()=>{
    console.log("componet mounted or updated");
},[flag]);

   
    function showData(){
        console.log(new Date().toString());

    setTime(new Date().toString());
       // return <div>{new Date().toString()}</div>
    };
    setInterval(showData,1000);
    return <div>{time}</div>
}
export default Clock;