import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    

    return(
        <div >
        
         
         <div className='nav-line'>

         <img className="logo" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/generic-yoga-logo.png?auto=format&q=60&fit=max&w=930" width="75" height="60"/>  
         


          <NavLink className="nav" to="/"> 
            Homepage
          </NavLink>

          <NavLink className="nav" to="/build"> 
            Build Workout
          </NavLink>

          <NavLink className="nav" to="/workouts"> 
            See Workouts
          </NavLink>

          <NavLink className="nav" to="/exercises"> 
            Exercises
          </NavLink>          
         



          
         </div>

          <hr ></hr>  
       

        </div>
    );
}

export default Nav