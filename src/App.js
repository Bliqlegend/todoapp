import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect} from 'react';
import { Button } from '@material-ui/core';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';
import Todo from './Todo';
import db from './firebase';



function App() {
  const [todos, setTodos] = useState(['']); //empty array initially
  //todo var is an array
  const [input, setInput] = useState('');
  // console.log(input)
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, []);
  const addTodo = (event) => {
    //this will be executed when add todo is clicked
    event.preventDefault(); //will stop the refresh

    db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })


    // console.log('Working',addTodo)
    setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Todo-APP</h1> 
    <form>
  <FormControl>
       <InputLabel htmlFor="my-input">Add a Todo</InputLabel>
       <Input value={input} onChange={event => setInput(event.target.value)}/>
  </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">
        Add Todo
   </Button>
    </form>

    <ul>
      {todos.map(todo => (
        <Todo text={todo}/>
      ))}
    </ul> 
    </div>
  );
}

export default App;
