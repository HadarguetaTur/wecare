import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  options?: string[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  options,
  register,
  errors,
}) => {
  if (type === 'textarea') {
    return (
      <div className="w-full mx-auto">

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
        <textarea
          {...register(id, { required })}
          id={label}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          disabled={disabled}
        ></textarea>
      </div>
    )
  }
  if (type === 'select' && options) {
    return (
      <div className='w-full relative'>
        <label htmlFor={id} className='block  font-medium text-gray-700'>
          {label}
        </label>
        <select
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className='w-full flex items-center'>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          {...register(id)}
          className={`form-checkbox h-5 w-5 text-gray-600 ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}`}
        />
        <label htmlFor={id} className={`ml-2 ${errors[id] ? 'text-rose-500' : 'text-gray-700'}`}>
          {label}
        </label>
      </div>
    );
  }


  return (
    <div className='w-full relative'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}`}
      />
      <label
        htmlFor={id}
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${formatPrice ? 'left-9' : 'left-4'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;