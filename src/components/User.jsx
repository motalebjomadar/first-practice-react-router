import Address from './Address';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className='user'>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <p>{email}</p>
        </div>
    );
};

export default User;