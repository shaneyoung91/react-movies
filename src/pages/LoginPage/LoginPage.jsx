import {useState} from 'react';

export default function LoginPage({ user, setUser }) {
    const [formData, setFormData] = useState("")

    function handleUser(evt) {
        evt.preventDefault();
        setUser(formData)
        setUser("Bob") // NEED TO FIX THIS
    }

    return (
        <>
            <h3>Enter a UserName to Sign Up</h3>
            <form onSubmit={handleUser}>
                <div>
                    <label>Username</label>
                    <input type="text"></input>
                </div>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}
