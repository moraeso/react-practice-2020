import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const UserName = styled.b(({ active }) => css`
  cursor: pointer;
  color: ${active ? 'green' : 'black'};
`);

const User = React.memo(({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  console.log('[rerender] User');
  return (
    <div>
      <UserName active={user.active} onClick={() => onToggle(user.id)}>
        {user.username}
      </UserName>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  console.log('[rerender] UserList');
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
