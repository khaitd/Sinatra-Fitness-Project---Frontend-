import React from 'react';

function Trainer({info}) {
    

    return(
    <div> 
        {console.log(info)}
        {info.map((e) => {
        //   console.log(e.name)
        return  <h1> {e.name} </h1> 
        })}

    </div>
        );
}

export default Trainer