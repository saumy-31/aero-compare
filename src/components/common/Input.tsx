import React, { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "block w-full py-3 bg-gray-50 dark:bg-slate-800 border rounded-xl text-sm outline-none focus:ring-2 dark:text-white transition-all",
              leftIcon ? "pl-11" : "pl-4",
              rightIcon ? "pr-11" : "pr-4",
              error 
                ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                : "border-gray-200 dark:border-gray-700 focus:ring-brand-500 focus:border-brand-500",
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-red-500 text-xs font-semibold mt-1.5 pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';