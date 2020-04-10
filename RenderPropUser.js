import React from 'react';

export default function RenderPropUser({userActive}) {
  return (
    <div>is user active: {userActive ? "true":"false"}</div>
  )
}