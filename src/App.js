import './App.css';
import React,{useState,useEffect} from 'react'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'


function App() {
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState("")
  
  useEffect(()=>{
    db.collection("todos").orderBy("timestamp","desc").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) =>({id:doc.id,title:doc.data().title})));
    });
  }, []);
  const addTodo = e =>{
    e.preventDefault()
    db.collection("todos").add({
      title:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <div className="add">
        <input 
          onChange={e=>setInput(e.target.value)} 
          value={input} 
          type="text"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <h2>TASK LIST</h2>
      <ul className="todos">
        {todos.map((todo,i)=>(
          <Todo key={i} title={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
