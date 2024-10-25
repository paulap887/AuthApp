import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../api/auth';
import {
  PageContainer,
  StyledPaper,
  PageTitle,
  StyledTextField,
  ErrorMessageDiv,
} from '../styles/theme';
import { Typography, Link, Button } from '@mui/material';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().max(100, 'Name must be at most 100 characters').required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .max(255, 'Email must be at most 255 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(128, 'Password must be at most 128 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .required('Password is required'),
  });

  return (
    <PageContainer>
      <StyledPaper sx={{ padding: 4 }}>
        <PageTitle variant="h4" sx={{ mb: 4 }}>
          Sign Up
        </PageTitle>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await signUp(values);
              navigate('/signin');
            } catch (error) {
              setSubmitError('Email already in use');
              console.error('SignUp: Error:', error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form style={{ width: '100%' }}>
              <Field
                name="name"
                as={StyledTextField}
                label="Name"
                fullWidth
                margin="normal"
                required
                inputProps={{ maxLength: 100 }}
              />
              <ErrorMessage name="name" component={ErrorMessageDiv} />
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
                Sign Up
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Already have an account? <Link href="/signin">Sign In</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </PageContainer>
  );
};

export default SignUp;
