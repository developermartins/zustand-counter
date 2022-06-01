import React from 'react';
import create from 'zustand';

const App = () => {

  const useStore = create(set => ({
    count: 0,
    inc: () => set(state => ({ count: state.count + 1 }))
  }))

  const inc = useStore(state => state.inc);
  const num = useStore(state => state.count);

  return (
    <div>
      <div>{num}</div>
      <br />
      <button onClick={inc}>Count!</button>
    </div>
  );
};

export default App;
