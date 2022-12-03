import { useState } from 'react';

function useCounter(initialValue) { 
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1 );
    //!! 0 보다 작은수가나오면 안되니까.
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0) );
    
    return [count, increaseCount, decreaseCount];
}

export default useCounter;