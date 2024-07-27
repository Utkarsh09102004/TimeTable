import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/index.css';
import result from '@/assets/result.json';
import InputBox from '../components/InputBox';

function Home() {
  const [keys, setKeys] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  function extractKeys(obj) {
    const keysArray = Object.keys(obj);
    setKeys(keysArray);
  }
  
  useEffect(() => {
    extractKeys(result);
  }, []);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      navigate(`/schedule/${selectedOption.value}`);
    } else {
      alert('No option selected');
    }
  };

  return (
    <div className="home-container">{/* custom */}
      
      <div className="content">{/* custom */}
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-box-container">
            <InputBox options={keys} onChange={handleChange} />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
