import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Button, Alignment, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
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
            <Popover2
              interactionKind="click"
              placement="bottom"
              content={
                <Menu>
                  <MenuItem
                    icon="log-out"
                    onClick={() => navigate('/signout')}
                    text="Sign out"
                  />
                </Menu>
              }
              renderTarget={({ isOpen, ref, ...targetProps }) => (
                <Button
                  {...targetProps}
                  elementRef={ref}
                  minimal
                  icon="user"
                  rightIcon="chevron-down"
                />
              )}
            />
          </Navbar.Group>
        )}
        <Outlet />
      </Navbar>
    </React.Fragment>
  );
}
