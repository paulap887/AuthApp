import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getProfile, logout } from '../api/auth';
import { useAuth } from '../context/AuthContext';

const Application: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ name: string } | null>(null);
  const { setAuthStatus } = useAuth(); // Ensure useAuth is called inside the component

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching profile:', error);
        navigate('/signin');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    setAuthStatus(false); // Ensure the auth status is updated
    navigate('/signin');
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {profile ? profile.name : 'Loading...'}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Application;
