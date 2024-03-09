const Profile = ({ imgUrl, name, username, address, followers, views, likes }) => (
    <div>
        <div>
            <img src={imgUrl} alt={name} width="640" />
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{address}</p>
        </div>
        
        <div>
            <p>{followers}</p>
            <p>{views}</p>
            <p>{likes}</p>
        </div>
        
    </div>
)

export default Profile;
