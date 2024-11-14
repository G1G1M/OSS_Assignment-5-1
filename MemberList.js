import React from 'react';

function MemberList({ members, deleteMember, setSelectedMember }) {
  return (
    <ul className="list-group">
      {members.map((member) => (
        <li
          key={member.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            이름: {member.name}, 나이: {member.age}, 직업: {member.job}, 번호:{' '}
            {member.phoneNumber}
          </span>
          <div>
            <button
              onClick={() => setSelectedMember(member)}
              className="btn btn-sm btn-warning me-2"
            >
              수정
            </button>
            <button
              onClick={() => deleteMember(member.id)}
              className="btn btn-sm btn-danger"
            >
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MemberList;
