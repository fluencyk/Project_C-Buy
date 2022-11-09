import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar style={{ position: 'sticky', top: 0 }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Button
              intent="primary"
              text="C-Buy"
              large
              minimal
              onClick={() => navigate('/')}
            />
          </Navbar.Heading>
        </Navbar.Group>

        {auth.user && (
          <Navbar.Group align={Alignment.RIGHT}>
            <Button
              minimal
              intent="primary"
              icon="home"
              text="Home"
              onClick={() => navigate('/')}
            />
            <Navbar.Divider />
            <Button
              minimal
              icon="people"
              text="Signout"
              onClick={() => navigate('/signout')}
            />
          </Navbar.Group>
        )}
        <Outlet />
      </Navbar>
    </React.Fragment>
  );
}
