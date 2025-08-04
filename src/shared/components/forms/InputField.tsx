'use client';

import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

type BaseProps = {
  name: string;
  label?: string;
  error?: string;
  rules?: {
    required?: string | boolean;
    [key: string]: any;
  };
  as?: 'input' | 'textarea'; // toggle between input and textarea
};

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type InputFieldProps = InputProps | TextareaProps;

const InputField = React.forwardRef<HTMLElement, InputFieldProps>(
  ({ name, label, error, rules = {}, className, as = 'input', ...props }, ref) => {
    const { register } = useFormContext();
    const { ref: fieldRef, ...fieldProps } = register(name, rules);

    const mergedRef = (node: HTMLElement) => {
      fieldRef(node);
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    };

    const isRequired = Boolean(rules.required);

    const baseStyles = cn(
      'border shadow-none border-primary dark:border-gray-600 rounded-md px-3  focus-visible:ring-1 focus-visible:ring-primary dark:focus-visible:ring-white/40 focus-visible:ring-offset-0',
      error ? 'border-red-500 focus-visible:ring-red-500' : '',
      className
    );

    return (
      <div className="grid w-full gap-1">
        {label && (
          <Label htmlFor={(props as any).id || name} className={error ? 'text-red-500' : ''}>
            {label} {isRequired && <span className="text-red-500">*</span>}
          </Label>
        )}

        {as === 'textarea' ? (
          <Textarea
            id={(props as any).id || name}
            ref={mergedRef as React.Ref<HTMLTextAreaElement>}
            className={cn('py-3', baseStyles)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            {...fieldProps}
          />
        ) : (
          <Input
            id={(props as any).id || name}
            ref={mergedRef as React.Ref<HTMLInputElement>}
            className={cn('py-6', baseStyles)}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            {...fieldProps}
          />
        )}

        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
export default InputField;
