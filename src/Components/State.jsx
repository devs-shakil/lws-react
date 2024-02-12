import React, { useState } from 'react';

const State = () => {
    const [to,setTo] = useState('Alice');
    const [message, setMessage] = useState("Hello");

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        },2000)
    }
    return (
        <div>
            {/* <h2>Hello snapshot</h2>
            <h1>{counter}</h1>
            <button
                onClick={() =>{
                    setCounter(counter + 5);
                    setTimeout(()=>{
                        alert(counter)
                    }, 3000)
                }}
            >
                +5
            </button> */}

            <form onSubmit={handleSubmit}>
                <label>
                    To:{' '}
                    <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                    </select>
                </label>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
                </form>
             </div>
    );
}

export default State;
