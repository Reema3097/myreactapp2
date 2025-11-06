import React, { useRef } from 'react';

function UncontrolledExample() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("You typed: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />  {/* Not controlled by React */}
      <button onClick={handleSubmit}>Show Value</button>
    </div>
  );
}
