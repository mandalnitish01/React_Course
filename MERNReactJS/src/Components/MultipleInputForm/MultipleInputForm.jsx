import React, { useState } from 'react';

const MultipleInputForm = () => {
  const [inputs, setInputs] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, inputs]);
    setInputs({});
  };

  return (
    <div>
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={inputs.age || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}, <strong>Age:</strong> {data.age}, <strong>Email:</strong> {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleInputForm;
