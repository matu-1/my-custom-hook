import { useState } from 'react'

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const incrementar = (factor = 1) => {
    setState(state + factor);
  }

  const decrementar = (factor = 1) => {
    setState(state - factor);
  }

  const resetear = () => {
    setState(initialState);
  }

  return {
    state,
    incrementar,
    decrementar,
    resetear
  };
}

export default useCounter
