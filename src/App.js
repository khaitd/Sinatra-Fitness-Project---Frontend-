import React, {useState, useEffect} from 'react';
import Exercise from './components/exercise';
import Trainer from './components/trainer';
import Workout from './components/workout';
import Build from './components/buildworkout';

import Homepage from './components/homepage';
import Nav from './components/nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import './App.css';

function App() {

  const [trainer, setTrainer] = useState([])
  const [workout, setWorkout] = useState([])
  const [exercise, setExercise] = useState([])

    let request = async()=>{
      let req = await fetch('http://localhost:9292/')
      let res = await req.json()
        setTrainer(res)
    }

    let request2 = async()=>{
      let req = await fetch('http://localhost:9292/workouts')
      let res = await req.json()
        setWorkout(res)
    }

    let request3 = async()=>{
      let req = await fetch('http://localhost:9292/exercises')
      let res = await req.json()
        setExercise(res)
    }
    
    useEffect(() => {
      request()
      request2()
      request3()
      
    }, [])

  return (
    
  <div>
    <Nav/>
    
      <Switch>
        <Route exact path="/"> 
            <Homepage/>
       </Route>
       <Route exact path="/build"> 
        <Build  />
       </Route>
       <Route exact path="/workouts"> 
        <Workout info={workout} />
       </Route>
       <Route exact path="/exercises"> 
         <Workout info={exercise} />
       </Route>
      
       
    </Switch>

    {/* <Trainer info={trainer} /> */}
    
  </div>

  );
}

export default App;
