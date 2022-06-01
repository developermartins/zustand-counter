import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
}))

export function Controls() {
  const inc = useStore(state => state.inc)
  return <button onClick={inc}>one up</button>
}

export function Counter() {
  const count = useStore(state => state.count)
  return <h1>{count}</h1>
}