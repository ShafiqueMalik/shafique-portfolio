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

const InputUnderlined = React.forwardRef<HTMLElement, InputFieldProps>(
  ({ name, label, error, rules = {}, className, as = 'input', ...props }, ref) => {
    const { register } = useFormContext();
    const { ref: fieldRef, ...fieldProps } = register(name, rules);

    const mergedRef = (node: HTMLElement) => {
      fieldRef(node);
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    };

    const isRequired = Boolean(rules.required);

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
            className={cn(
              'border-0 border-b-2 dark:border-b-[#656565] shadow-none rounded-none px-0 py-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:!border-primary/40 focus:dark:!border-b-white',
              error ? '!border-b-red-500 focus:border-red-500' : 'border-primary',
              className
            )}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            {...fieldProps}
          />
        ) : (
          <Input
            id={(props as any).id || name}
            ref={mergedRef as React.Ref<HTMLInputElement>}
            className={cn(
              'border-0 border-b-2 dark:border-b-[#656565] shadow-none rounded-none px-0 py-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:!border-primary/40 focus:dark:!border-b-white',
              error ? '!border-b-red-500 focus:!border-red-500' : 'border-primary',
              className
            )}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            {...fieldProps}
          />
        )}

        {/* {error && <p className="text-xs text-red-500 font-medium">{error}</p>} */}
      </div>
    );
  }
);

InputUnderlined.displayName = 'InputUnderlined';
export default InputUnderlined;
