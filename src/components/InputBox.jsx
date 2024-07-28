import React from 'react';
import Select from 'react-select';

const InputBox = ({ options, onChange }) => {
  // Transform the options if they are strings
  const formattedOptions = options.map(option => ({
    value: option,
    label: option,
  }));


  // Define custom styles
  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     width: 200,    // Fixed width
  //     height: 40,    // Fixed height
  //   }),
  //   menu: (provided) => ({
  //     ...provided,
  //     width: 200,    // Match width with control
  //   }),
  //   placeholder: (provided) => ({
  //     ...provided,
  //     fontSize: '16px',
  //   }),
  //   singleValue: (provided) => ({
  //     ...provided,
  //     fontSize: '16px',
  //   }),
  // };
///custom style ends



  return (
    <Select
      options={formattedOptions}
      onChange={onChange}
      placeholder="Select an option"
      // styles={customStyles}
    />
  );
};

export default InputBox;
