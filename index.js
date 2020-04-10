import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { useUserActive } from './Hook';
import HigherOrderComponentUser from './HigherOrderComponentUser';
import RenderPropComponent from './RenderPropComponent';
import RenderPropUser from './RenderPropUser';
import './style.css';

function App() {
  const isActive = useUserActive(1);

  return (
    <div>
      <h3>Three ways to share logic in react</h3>

      <div className="method">
        1) Hooks:
        <div>
          is user active: {isActive ? 'true' : 'false'}
        </div>
      </div>
      
      <div className="method">
        2) Higher Order Components:
        <HigherOrderComponentUser />
      </div>

      <div className="method">
        3) Render Props:
        <RenderPropComponent render={isActive => (
          <RenderPropUser isActive={isActive} />
        )}/>
      </div>

    </div>
  );
}

render(<App />, document.getElementById('root'));
