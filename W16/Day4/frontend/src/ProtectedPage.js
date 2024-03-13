import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function ProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      jwtDecode(token);
    } catch (err) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, []);

  return <h1>You did it!</h1>;
}

export default ProtectedPage;