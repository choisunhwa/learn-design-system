import { useState, useEffect } from 'react';
import useCounter from './useCounter';
import Button from '../copied/Button';

const MAX_CAPACITY = 4;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log('============');
        console.log('useEffect() is called');
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(() => MAX_CAPACITY <= count);
        console.log(`Current count value : ${count}`);
    }, [count])

    return (
        <div style={{padding: 20}}>
            <p>{`총 ${count} 명 수용 했습니다.`}</p>
            {/* 
            <button onClick={ increaseCount } disabled={isFull}>입장</button>            
            <button onClick={decreaseCount} >퇴장</button>   
            */}
            
            <Button onClick={ increaseCount } disabled={isFull} status="normal" type="Primary">입장</Button>            
            <Button onClick={decreaseCount} status="normal" type="Secondary">퇴장</Button>      
            {isFull && <p>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;