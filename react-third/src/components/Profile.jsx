function Profile(props){
    return (
        <div>
            <h2>My fiance name is {props.name}</h2>
            <h2>My fiance address is {props.address}</h2>
            <p>Full stack developer</p>
        </div>
    );
}

export default Profile;