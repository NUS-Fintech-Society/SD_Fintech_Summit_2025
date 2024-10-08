import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-white font-medium mb-1">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded text-black"
      />
    </div>
  );
};

export default InputField;