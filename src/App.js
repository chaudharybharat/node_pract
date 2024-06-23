import logo from './logo.svg';
import './App.css';
import Welcome  from './components/Welcome';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';
import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import { useState } from 'react';
function App() {
  const [seachTerm,setSearchTerm]=useState();
  const [flag,setFlag] =useState(true);
  function getGreeting(user){
    return user.firstname+" "+user.lastname;
  }

  const handleSearch=(e)=>{
    setSearchTerm(e.target.value);
  };

 

  const user={
    firstname:"Bharat",
    lastname:"chaudhary"

  };
  const name="Welcome";

const toggle=()=>{
  console.log("toggle clicked");
  setFlag(!flag);
}

const posts=[
{
  id:1,
  title:"Hello world",
  content:"Welcome to learning React"
},
{
  id:2,
  title:"Installation",
  content:"You can install React from npm."
},
{
  id:3,
  title:"Run App",
  content:"Your can run React app with Npm commond"
},{

id:4,
title:"Build App",
content:"Your can run React app with Buid commond"
},{
id:5,
title:"Produce",
content:"Your can run React app Produce Npm commond"
}
];

const fillterList=posts.filter((item)=>{
  return item.title.toLocaleLowerCase().includes(seachTerm);
 });

  return (
    <div>
    <div>{name}
    </div>
    <button onClick={toggle}>Toggle Clock Componet</button>
    <div>{flag?<Clock/>:"No Click Componet"}</div> 
    <div><Welcome user={user}/></div>
    <div>Hello,{getGreeting(user)}</div>
    <LoginControl/>
     <Blog posts={posts}/>
     <Form/>
     <Search seachTerm={seachTerm} handleSearch={handleSearch}/>
     <List list={fillterList}/>
    </div>
    
  );
}

export default App;
