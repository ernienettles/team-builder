import React, {useState} from 'react';
import TeamMemberForm from "./Components/TeamMemberForm";
import './App.css';
import TeamMembers from './Components/TeamMembers';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "bob",
      email: "bob@bob.com",
      role: "Back-End Engineer"
    }
])

  const addNewMember = member => {
    const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
    };
    setMembers([...members, newMember])
  };


  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamMemberForm addNewMember={addNewMember}/>
      <TeamMembers members={members} />
    </div>
  );
}

export default App;
