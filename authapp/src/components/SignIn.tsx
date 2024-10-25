import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../api/auth';
import {
  PageContainer,
  StyledPaper,
  PageTitle,
  StyledTextField,
  ErrorMessageDiv,
} from '../styles/theme';
import { Typography, Link, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setAuthStatus } = useAuth();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .max(255, 'Email must be at most 255 characters')
      .required('Email is required'),
    password: Yup.string()
      .max(128, 'Password must be at most 128 characters')
      .required('Password is required'),
  });

  return (
    <PageContainer>
      <StyledPaper sx={{ padding: 4 }}>
        <PageTitle variant="h4" sx={{ mb: 4 }}>
          Sign In
        </PageTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await signIn(values);
              setAuthStatus(true); // Update auth status
              navigate('/app');
            } catch (error) {
              setSubmitError('Invalid email or password');
              console.error('SignIn: Error:', error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form style={{ width: '100%' }}>
              <Field
                name="email"
                as={StyledTextField}
                label="Email"
                fullWidth
                margin="normal"
                required
                inputProps={{ maxLength: 255 }}
              />
              <ErrorMessage name="email" component={ErrorMessageDiv} />
              <Field
                name="password"
                as={StyledTextField}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                inputProps={{ maxLength: 128 }}
              />
              <ErrorMessage name="password" component={ErrorMessageDiv} />
              {submitError && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {submitError}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting || !isValid || !dirty}
                sx={{ mt: 2 }}
              >
                Sign In
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </PageContainer>
  );
};

export default SignIn;
