import React from "react";

const TeamMembers = props => {
    return (
        <div className="team-member-list">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;