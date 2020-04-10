import React from 'react';
import withUserActive from './HigherOrderComponent';

function HigherOrderComponentUser({userActive}) {
  return (
    <div>is user active: {userActive ? "true":"false"}</div>
  )
}

export default withUserActive(HigherOrderComponentUser);