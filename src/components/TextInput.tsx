import {InputHTMLAttributes, ReactNode} from 'react';

import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({children}:TextInputRootProps){
  return (
    <div
      className={clsx(
        'py-4 px-3 rounded w-full flex items-center gap-3 bg-gray-800  focus-within:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({children}:TextInputIconProps) {
  return (
    <Slot 
      className="w-6 h-6 text-gray-400"
    >
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

function TextInputInput({...props}: TextInputInputProps){
  return (
      <input 
        {...props}
        className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}