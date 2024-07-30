import React from 'react';
import Select from 'react-select';
import data from '@/assets/OldNew.json';

const InputBox = ({ onChange }) => {
  // Transform the options if they are strings
  const formattedOptions = Object.entries(data).map(([value, label]) => ({
    value,
    label
  }));


  return (
    <Select
      options={formattedOptions}
      onChange={onChange}
      placeholder="Subgroup"
      // styles={customStyles}
    />
  );
};

export default InputBox;
