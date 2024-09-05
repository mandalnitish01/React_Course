import React, { useState } from 'react';
import './Resumebuilder.css'
const nations = [
  { name: 'India', value: 'IN' },
  { name: 'Pakistan', value: 'PK' },
  { name: 'Bangladesh', value: 'BG' },
];

function NationsDropdown() {

  const [selectedNation, setSelectedNation] = useState('');


  
  const handleChange = (event) => {
    setSelectedNation(event.target.value);
  };

  return (
    <div className='wrapper'>
      <h2>Select a Nation</h2>
      <div>
      <select value={selectedNation} onChange={handleChange}>
        <option value="" disabled>
          Choose a nation
        </option>
        {nations.map((nation, index) => (
          <option key={index} value={nation.value}>
            {nation.name}
          </option>
        ))}
      </select>
      </div>
      <div>
      {selectedNation}
      {/* {selectedNation && (
        <p>
            <option>
            {selectedNation}
            </option>
           
        </p>
      )} */}
      </div>
    </div>
  );
}

export default NationsDropdown;