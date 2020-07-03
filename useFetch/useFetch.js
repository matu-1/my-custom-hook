import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(()=>{
    setState({ data: null, isLoading: true, error: null});
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setState({
          data: data[0] || [],
          isLoading: false,
          error: null,
        });
      });
      
  }, [url]);

  return state;
}

export default useFetch;
