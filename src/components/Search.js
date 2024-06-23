import { useState } from "react";

function Search({seachTerm,handleSearch}){
   // const [seachTerm,setSearchTerm]=useState();
 
    return(<div>
        Search
        <input type="text" value={seachTerm} onChange={handleSearch}></input></div>)
}

export default Search;