import React, { useState, useEffect } from 'react';

function MemberForm({
  addMember,
  selectedMember,
  updateMember,
  setSelectedMember,
}) {
  const [member, setMember] = useState({
    name: '',
    age: '',
    job: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (selectedMember) {
      setMember(selectedMember);
    } else {
      setMember({ name: '', age: '', job: '', phoneNumber: '' });
    }
  }, [selectedMember]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMember) {
      updateMember(selectedMember.id, member);
      setSelectedMember(null);
    } else {
      addMember(member);
    }
    setMember({ name: '', age: '', job: '', phoneNumber: '' });
  };

  const resetForm = () => {
    setSelectedMember(null);
    setMember({ name: '', age: '', job: '', phoneNumber: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-2">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={member.age}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={member.job}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={member.phoneNumber}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">
        {selectedMember ? 'Update' : 'Add'} Member
      </button>
      <button type="button" className="btn btn-secondary" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default MemberForm;
