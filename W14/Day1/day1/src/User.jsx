const User = (props) => {
    return (
        <div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={`https://robohash.org/${props.id}?size=150x150`} alt="" />
        <h2>{props.name}</h2>
        <h4>{props.username}</h4>
        <p>{props.email}</p>

        </div>
    );
    }

export default User;