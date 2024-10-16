
import './Fend.css'

const Fend = ({friend}) => {
    console.log(friend)
    const {name, email, username,address,company} = friend
    return (
        <div className="friend">
            <h3>Name: {name}</h3>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>
            <h2>Address: {address.street}</h2>
            <h1>Company : {company.catchPhrase}</h1>
            
        </div>
    );
};

export default Fend;