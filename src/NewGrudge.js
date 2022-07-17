import { useState } from "react";


const NewGrudge = ({onSubmit}) => {

    const [person, setPerson] = useState('');
    const [reason, setReason] = useState('');

    const handleChange = (event) => {
        event.preventDefault();

        if (person && reason) {
            onSubmit({ person, reason });
            setPerson('');
            setReason('');
        }
        return ;
    }

    return (
        <form className="addGrudge" onSubmit={handleChange}>
            <input type="text" placeholder="Person"
                value={person}
                onChange={event => setPerson(event.target.value)}
            />
            <input type="text" placeholder="Reason" 
                value={reason}
                onChange={event => setReason(event.target.value)}
            />
            <input type="submit" className="submit"
                value="Submit"/>
        </form>
    );
}

export default NewGrudge;