import React, { useState } from 'react';
import AxiosInstance from '../../context/AxiosInstance';
import Alert from 'components/alert/alert';
import WithAuthProtection from 'components/auth/AuthProtectionComponent';

const ChildSquareRootCalculator = () => {
  const [number, setNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState('');
  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const handleClick = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvcmFjaW8xQHRlc3QuY29tIiwiaWQiOiJlMjc4MDZkNS1iN2I3LTRiNWYtOTVmYy0wZjAwZTQyODc3YTgiLCJpYXQiOjE2ODA3OTQwNDAsImV4cCI6MTY4MDg4MDQ0MH0.YPIGtwblV8aSbMJMx9hXJDgmJ4YQO69rQBriLolvkro'

    try {
      // Make an API call to the backend to calculate the square root of a number
      // We'll pass the number from the state in the request body
      const response = await AxiosInstance.post('/record/sqr-root', {
        value: number
      });
      
      setShowAlert(true)
      setResult(`The square root of ${number} is ${response.data.result}`);
      
    } catch (error) {
      console.error(error);
      alert('There was an error calculating the square root.');
    }
  };

  return (
    <div>
      <label htmlFor="number-field">Enter a number:</label>
      <input 
        id="number-field"
        type="number"
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button onClick={handleClick}>Calculate Square Root</button>
      <Alert message={result} onClose={handleAlertClose} isOpen={showAlert} />
    </div>
  );
}

const SquareRootCalculator = WithAuthProtection(ChildSquareRootCalculator)
export { SquareRootCalculator };