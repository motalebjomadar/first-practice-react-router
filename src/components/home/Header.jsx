import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='test'>
            <h2> This is header components</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;