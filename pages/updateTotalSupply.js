 // Create a page which will use my api with 2 inputs in a form: password and value

import { useState } from 'react';

 export default function UpdateTotalSupply() {
        const [password, setPassword] = useState('');
        const [value, setValue] = useState('');
        const [isSuccess, setIsSuccess] = useState(false);
        const [isError, setIsError] = useState(false);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            if(password === '' || value === '') return setIsError(true);
            if(password !== 'ibexlab') return setIsError(true);
            if(isSuccess) setIsSuccess(false);
            if(isError) setIsError(false);
            
            const res = await fetch(`/api/vixco?q=editTotalSupply&value=${value}`);
            if (res.status === 200) {
                // reset form
                setPassword('');
                setValue('');
                setIsSuccess(true);
            } else {
                setIsError(true);
            }
        };
    
        return (
            <div>
                <h1>Update Total Supply</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="value">Value</label>
                    <input
                        type="text"
                        id="value"
                        name="value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {isSuccess && <p>Success!</p>}
                {isError && <p>Error!</p>}
            </div>
        );
    }