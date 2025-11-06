import React, { useState } from 'react';

function ControlledExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={name}              // React controls this value
        onChange={(e) => setName(e.target.value)} // updates state
      />
      <p>Your name is: {name}</p>
    </div>
  );
}
