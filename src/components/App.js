import React, { useState } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.css"

function App() 
{
const [todos,setTodos]=useState([]);
 let todo="";

const[id,setId]=useState(0);
 const updatetodo=e=>{
	 todo=e.target.value;
 }


function task(newTodo){
	if(newTodo!==""){
    const todoObj={
		id:(()=>{
			let a=id;
			a++;
			setId(a)}),
		value:newTodo,
		isEditing:false
	}
	const upTodos=[...todos,todoObj];
	setTodos(upTodos);
	console.log(todos);
	}
}

const delete_todo=(todo_id)=>{
	let filtered_arr=todos.filter(todo=>todo.id!==todo_id);
	setTodos(filtered_arr);
}

const del=()=>{
	delete_todo(todo.id);
}

const items=todos.map(function(todo){
	return <li  className="list">{todo.value} <button >Edit</button> | <button onClick={()=>{delete_todo(todo.id)}}>Delete</button></li>
})


	return (
	<div id="main" className="text-center">
	<h1>Todo List</h1>
	<textarea id="task" style={{maxWidth:300}} onChange={updatetodo}></textarea><br/>
	<button id="btn"  onClick={()=>{task(todo)}}>Add</button><br/>

	<div className="text-center">
		<ul>
			{items}
		</ul>
	</div>
	</div>
	
	);
}


export default App;
