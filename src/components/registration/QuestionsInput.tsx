import React from 'react';

interface QuestionsInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionsInput: React.FC<QuestionsInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="questions" className="block text-white font-medium mb-1">
        Any questions?
      </label>
      <input
        id="questions"
        type="text"
        name="questions"
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded text-black"
      />
    </div>
  );
};

export default QuestionsInput;