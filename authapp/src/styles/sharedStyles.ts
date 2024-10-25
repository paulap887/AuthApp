import { styled } from '@mui/material/styles';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

export const PageContainer = styled(Container)(() => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6), // Increase padding for all sides
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

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
  },
  '&.Mui-disabled': {
    background: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
}));

export const ErrorMessageDiv = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  marginTop: theme.spacing(1),
  fontSize: '0.875rem',
}));
