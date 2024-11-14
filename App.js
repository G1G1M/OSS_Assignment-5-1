import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemberList from './MemberList';
import MemberForm from './MemberForm';

function App() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(
        'https://672818e6270bd0b975545367.mockapi.io/api/v1/user'
      );
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const addMember = async (member) => {
    try {
      await axios.post(
        'https://672818e6270bd0b975545367.mockapi.io/api/v1/user',
        member
      );
      fetchMembers();
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const updateMember = async (id, updatedMember) => {
    try {
      await axios.put(
        `https://672818e6270bd0b975545367.mockapi.io/api/v1/user/${id}`,
        updatedMember
      );
      fetchMembers();
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const deleteMember = async (id) => {
    try {
      await axios.delete(
        `https://672818e6270bd0b975545367.mockapi.io/api/v1/user/${id}`
      );
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Membership Management</h2>
      <button className="btn btn-warning mb-3" onClick={fetchMembers}>
        회원 정보 가져오기
      </button>
      <MemberForm
        addMember={addMember}
        selectedMember={selectedMember}
        updateMember={updateMember}
        setSelectedMember={setSelectedMember}
      />
      <MemberList
        members={members}
        deleteMember={deleteMember}
        setSelectedMember={setSelectedMember}
      />
    </div>
  );
}

export default App;
