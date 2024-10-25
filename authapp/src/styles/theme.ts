import { createTheme, styled } from '@mui/material/styles';
import { Container, Paper, Typography, TextField } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fc794c',
      light: '#fc794c',
      dark: '#d94a4f',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#fc794c',
      light: '#fc794c',
      dark: '#d94a4f',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#ff3d00',
      light: '#ff7539',
      dark: '#c30000',
    },
    background: {
      default: '#e6e5e5',
    },
    action: {
      disabledBackground: '#ececec',
      disabled: '#b5b5b5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          background: 'linear-gradient(45deg, #fc794c 30%, #d94a4f 90%)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
            background: 'linear-gradient(45deg, #d94a4f 30%, #fc794c 90%)',
          },
          '&.Mui-disabled': {
            backgroundColor: '#e0e0e0',
            backgroundImage: 'none',
            color: '#9e9e9e',
            opacity: 1,
            cursor: 'not-allowed',
            boxShadow: 'none',
            '&:hover': {
              transform: 'none',
              boxShadow: 'none',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fc794c',
            },
            '&:hover fieldset': {
              borderColor: '#d94a4f',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d94a4f',
            },
            '&.Mui-error fieldset': {
              borderColor: '#ff3d00',
            },
          },
          '& .MuiFormHelperText-root.Mui-error': {
            color: '#ff3d00',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

// Shared styled components
export const PageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(3),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  background: `linear-gradient(
    45deg,
    ${theme.palette.primary.main} 30%,
    ${theme.palette.primary.dark} 90%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(4),
  fontSize: '2.5rem',
  fontWeight: 600,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2),
  '& .MuiInputBase-input': {
    fontSize: '1rem',
  },
  '& .MuiFormHelperText-root': {
    fontWeight: 'bold',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
      borderWidth: '2px',
    },
    '&.Mui-focused': {
      background: `linear-gradient(white, white) padding-box, 
                   linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%) border-box`,
      backgroundOrigin: 'border-box',
      border: '2px solid transparent',
      borderRadius: theme.shape.borderRadius,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
    backgroundColor: 'white',
    padding: '0 4px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    padding: '0 4px',
  },
  '& .Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.error.main,
  },
}));

export const ErrorMessageDiv = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  marginBottom: theme.spacing(1),
  fontSize: '0.75rem',
  lineHeight: 1.2,
}));
