import React from 'react';
import Select from 'react-select';
import data from '@/assets/processed_data.json';

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
      placeholder="Enter Subgroup"
      // styles={customStyles}
    />
  );
};

export default InputBox;
