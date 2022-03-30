import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-around mt-9 text-idigo-500'>
            <Link to={'/'}>Home</Link>
            <Link to={'/meals'}>Meals</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};

export default Header;