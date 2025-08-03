'use client';

import { PrimaryButton } from '@/shared/components/forms/PrimaryButton';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('❌ Error boundary:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
      <h2 className="text-3xl font-semibold text-primary mb-4">Something went wrong</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        We&#39;re sorry! An unexpected error occurred. Please try again or contact support if the
        issue persists.
      </p>

      <PrimaryButton onClick={reset}>Try Again</PrimaryButton>
    </div>
  );
}
