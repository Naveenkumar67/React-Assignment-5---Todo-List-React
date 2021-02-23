import React, { useEffect, useState } from "react";
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

const editing=todo_id=>{
	const ar=todos.map((item)=>{
		if(item.id===todo_id){
			item.isEditing=true;
		}
		return item;
	})
	setTodos(ar);
}

const finish=(todo)=>{
	const ar=todos.map(function(item){
       if(item.id==todo.id){
		   return todo;
	   }
	   return item;
	})
	setTodos(ar);
}


const items=todos.map(function(todo){
	let todosValue=todo.value;
	const change=(e)=>{
		todosValue=e.target.value;
	   }
	const finsihEditing=()=>{
		todo.value=todosValue;
		todo.isEditing=false;
        finish(todo);
	}
	return <li  className="list">
	{todo.isEditing?(
		<>
		<textarea onChange={change}  defaultValue={todosValue}></textarea>
		<button onClick={finsihEditing}>Update Todo</button>
		</>
	):(
		<>
		{todo.value} (<a href="#" onClick={()=>{editing(todo.id)}}>Edit</a> | <a href="#" onClick={()=>{delete_todo(todo.id)}}>Delete</a>)
		</>
	)}
	</li>
	})


	return (
	<div id="main" className="text-center">
	<h1>Todo List</h1>
	<textarea id="task" style={{maxWidth:300}} onChange={updatetodo}></textarea><br/>
	<button id="btn"  onClick={()=>{task(todo)}}>Add</button>
	<div className="text-center">
		<ul>
			{items}
		</ul>
	</div>
	</div>
	
	);
}


export default App;
