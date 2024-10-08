"use client";

import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import InputField from '@/components/registration/InputField';
import CheckboxField from '@/components/registration/CheckboxField';
import QuestionsInput from '@/components/registration/QuestionsInput';
import SubmitButton from '@/components/registration/SubmitButton';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    days: {
      day1: { workshop1: false, workshop2: false },
      day2: { workshop3: false, workshop4: false },
      day3: { workshop5: false, workshop6: false },
    },
    questions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const [day, workshop] = name.split('.');

    if (day.startsWith('day')) {
      setFormData({
        ...formData,
        days: {
          ...formData.days,
          [day]: {
            ...formData.days[day],
            [workshop]: type === 'checkbox' ? checked : value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const docRef = await addDoc(collection(db, 'registrations'), formData);
      alert('Registration successful!');
      setFormData({
        name: '',
        email: '',
        days: {
          day1: { workshop1: false, workshop2: false },
          day2: { workshop3: false, workshop4: false },
          day3: { workshop5: false, workshop6: false },
        },
        questions: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-900 p-6 rounded-lg shadow-lg">
      <InputField id="name" label="Name" type="text" name="name" value={formData.name} onChange={handleChange} required />
      <InputField id="email" label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />

      {/* Day 1 Workshops */}
      <div className="mb-4">
        <label className="block text-white font-medium mb-1">Day 1 Workshops (10 Jan 2025)</label>
        <CheckboxField id="day1.workshop1" label="Workshop 1" name="day1.workshop1" checked={formData.days.day1.workshop1} onChange={handleChange} />
        <CheckboxField id="day1.workshop2" label="Workshop 2" name="day1.workshop2" checked={formData.days.day1.workshop2} onChange={handleChange} />
      </div>

      {/* Day 2 Workshops */}
      <div className="mb-4">
        <label className="block text-white font-medium mb-1">Day 2 Workshops (11 Jan 2025)</label>
        <CheckboxField id="day2.workshop3" label="Workshop 3" name="day2.workshop3" checked={formData.days.day2.workshop3} onChange={handleChange} />
        <CheckboxField id="day2.workshop4" label="Workshop 4" name="day2.workshop4" checked={formData.days.day2.workshop4} onChange={handleChange} />
      </div>

      {/* Day 3 Workshops */}
      <div className="mb-4">
        <label className="block text-white font-medium mb-1">Day 3 Workshops (12 Jan 2025)</label>
        <CheckboxField id="day3.workshop5" label="Workshop 5" name="day3.workshop5" checked={formData.days.day3.workshop5} onChange={handleChange} />
        <CheckboxField id="day3.workshop6" label="Workshop 6" name="day3.workshop6" checked={formData.days.day3.workshop6} onChange={handleChange} />
      </div>

      <QuestionsInput value={formData.questions} onChange={handleChange} />
      <SubmitButton />
    </form>
  );
};

export default RegistrationForm;