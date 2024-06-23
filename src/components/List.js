function List(props){

    return(
 <ul>
    {props.list.map((itme)=>{
        return <li key={itme.id}>{itme.title}</li>
    })}
 </ul>

    );
}

export default List;