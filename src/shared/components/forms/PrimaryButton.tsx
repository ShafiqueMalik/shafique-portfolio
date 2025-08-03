'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type PrimaryButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  outlined?: boolean;
  pill?: boolean;
};

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ outlined = false, pill = false, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          // base styles
          'bg-primary cursor-pointer  text-white hover:bg-primary/90',

          // outlined override
          outlined &&
            'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',

          // pill styling
          pill && 'rounded-full',

          // fallback border radius if not pill

          className
        )}
        {...props}
      />
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';
