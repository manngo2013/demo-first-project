import React, { useState } from 'react';
import PropTypes from 'prop-types';

CounterFuncComponent.propTypes = {};

function CounterFuncComponent(props) {
  // Declare a new state variable
  const [count, setCount] = useState(0);

  const handleUpdateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} time.</p>
      <button onClick={handleUpdateCount}>Click me</button>
    </div>
  );
}

export default CounterFuncComponent;
