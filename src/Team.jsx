import { useState } from "react";


const Team = () => {

    const [team, setTeam] = useState(11)

    const handleAdd = () =>{
        const newTeam = team + 1
        setTeam(newTeam)
    }

    const handleRemove = () =>{
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid tomato',
        margin : '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Players</button>
        </div>
    );
};

export default Team;