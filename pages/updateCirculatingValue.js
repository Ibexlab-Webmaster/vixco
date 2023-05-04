// Create a page which will use my api with 2 inputs in a form: password and value

import { useState } from 'react';

export default function UpdateCirculatingValue() {
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === '' || value === '') return setIsError(true);
        if (password !== 'ibexlab') return setIsError(true);
        if (isSuccess) setIsSuccess(false);
        if (isError) setIsError(false);

        const res = await fetch(`/api/vixco?q=editCirculatingValue&value=${value}`);
        console.log(res);
        if (res.status === 200) {
            setIsSuccess(true);
            // reset form
            setPassword('');
            setValue('');
        } else {
            setIsError(true);
        }
    };

    return (
        <main className='pb-[130px]' id='home'>
            <section className='pb-[160px] max-[450px]:pt-[40px] max-[450px]:px-6 max-[450px]:bg-[url("../public/assets/images/home-mobile.svg")] pt-[116px] bg-[url("../public/assets/images/hero-bg.svg")] bg-cover bg-no-repeat relative max-[450px]:pb-[120px]'>
                <h1>Update Circulating Value</h1>
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
            </section>
        </main>

    );
}