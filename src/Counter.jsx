import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1
        setCount(newCount)
    }
    const handleMinus = () =>{
        const minusCount = count - 1
        setCount(minusCount)
    }

    return (
        <div style={{border: '2px solid purple', margin: '10px', padding: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    );
};

export default Counter;