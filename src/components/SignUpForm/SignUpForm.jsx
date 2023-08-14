import {useState} from 'react';

export default function SignUpForm({ signUp }) {
    const [formData, setFormData] = useState({
        name: ""
    });

    function handleUser(evt) {
        evt.preventDefault();
        signUp(formData.name)
    }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    return(
        <>
            <h3>Enter a Username to Sign Up</h3>
            <form onSubmit={handleUser}>
                <div>
                    <label>Username</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
                </div>
                <br></br>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}