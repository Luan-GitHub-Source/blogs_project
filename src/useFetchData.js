import {useState, useEffect} from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortController = new AbortController();

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then(res => {
              if(!res.ok)
                throw Error('could not fetch data for that resource');
              return res.json();
            })
            .then(jsonData => {
              setIsPending(false);
              setError(null);
              setData(jsonData);
            })
            .catch(error => {
              if(error.name === 'AbortError')
                console.log('fetched aborted');
              else{
                setIsPending(false);
                setError(error);
              }
            })
        }, 1000);

        return () => abortController.abort();
    }, []);

    return {data, isPending, error};
}

export default useFetchData;