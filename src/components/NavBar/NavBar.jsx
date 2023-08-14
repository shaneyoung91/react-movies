import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function NavBar({user}) {

    
    return (
        <>
            <nav>
                <Link to="/">Movies List</Link>
                &nbsp; | &nbsp;
                <Link to="/actors">Actor List</Link>
            </nav>
            <h3>Welcome {user}!</h3>
        </>
    )
}
