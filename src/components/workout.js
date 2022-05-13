import React from 'react';

function Workout({info}) {
    

    return(
    <div> 
        
        {info.map((e) => {
             

          return <div className='woBox'> 
              <h1 className='workout'> {e.name} </h1> 
                </div>
          
        })}

    </div>
        );
}

export default Workout