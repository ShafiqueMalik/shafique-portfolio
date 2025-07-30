import React, { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type TextProps = {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  [key: string]: any; // Allow any other props, like onClick, etc.
};
function Text({ children, variant, className, as: Tag = 'p', ...props }: TextProps) {
  let classes = '';
  if (variant === 'primary') {
    classes = 'text-primary-light';
  } else if (variant === 'secondary') {
    classes = 'text-secondary';
  }
  return (
    <Tag className={twMerge(``, classes, className)} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
