import React from 'react';
import Form from './components/Form';
import { Controls, Counter } from './Counter';

const App = () => {

  return (
    <div>
      <Counter />
      <Controls />
      <br />
      <br />
      <Form />

    </div>
  );
};

export default App;
