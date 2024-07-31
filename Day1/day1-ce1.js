import React from 'react';

function Fun1() {
   const handleClick = () => {
      alert("Message from javascript alert");
      console.log("Message to developer");
   }

   return (
      <div>
         <h1>Let us see the output of JAVASCRIPT</h1>
         <button onClick={handleClick}>Click</button>
      </div>
   );
}

export default Fun1;
