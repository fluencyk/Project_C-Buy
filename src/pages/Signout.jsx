import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Card, Spinner } from '@blueprintjs/core';

export function Signout() {
  const navigate = useNavigate();
  const { signout } = useAuth();

  useEffect(() => {
    setTimeout(
      () =>
        signout(() => {
          navigate('/');
        }),
      1000,
    );
  }, [signout, navigate]);

  return (
    <Card style={{ textAlign: 'center' }}>
      <Spinner />
      Signing out...
    </Card>
  );
}
