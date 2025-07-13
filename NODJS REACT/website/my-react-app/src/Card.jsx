import profilePic from './assets/profile.jpg'
import reactPic from './assets/react.svg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={reactPic} alt="profile picture"></img>
            <h2 className="card-title">React</h2>
            <p className="card-text">aku ingin belajar react liburan semester ini</p>
        </div>
    );
}

export default Card