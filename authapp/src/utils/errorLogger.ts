import * as Sentry from '@sentry/react';

export const initErrorLogging = () => {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });
};

export const logError = (error: Error, context?: Record<string, unknown>) => {
  console.error(error);
  Sentry.captureException(error, { extra: context });
};
