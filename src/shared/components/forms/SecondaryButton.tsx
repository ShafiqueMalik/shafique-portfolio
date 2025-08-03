'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SecondaryButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  outlined?: boolean;
  pill?: boolean;
};

const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ outlined = false, pill = false, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          // base styles
          'bg-secondary cursor-pointer  text-white hover:bg-secondary/90',

          // outlined override
          outlined &&
            'bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white',

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

SecondaryButton.displayName = 'SecondaryButton';
export default SecondaryButton;
