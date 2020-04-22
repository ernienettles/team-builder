import React, {useState} from "react";

const MemberForm = props => {

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setTeamMember({ ...teamMember, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: "", email: "", role: ""});
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    placeholder="Name"
                    value={teamMember.name}
                    required
                />
            <label htmlFor="email"> </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChanges}
                    placeholder="Email"
                    value={teamMember.email}
                    required
                />
            <label htmlFor="role"> </label>
                <input
                    id="role"
                    type="text"
                    name="role"
                    onChange={handleChanges}
                    placeholder="Role"
                    value={teamMember.role}
                    required
                />
                <button type="submit">Add Member</button>
        </form>
    );
}

export default MemberForm;