import React from 'react';

interface CheckboxFieldProps {
  id: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, name, checked, onChange }) => {
  return (
    <div className="mb-2 flex items-center">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label htmlFor={id} className="text-white">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;