import React, { useState } from 'react';
import AxiosInstance from '../../context/AxiosInstance';
const RandomStringGenerator = ()  => {
  const [randomString, setRandomString] = useState('');

  const handleClick = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvcmFjaW8xQHRlc3QuY29tIiwiaWQiOiJlMjc4MDZkNS1iN2I3LTRiNWYtOTVmYy0wZjAwZTQyODc3YTgiLCJpYXQiOjE2ODA3OTQwNDAsImV4cCI6MTY4MDg4MDQ0MH0.YPIGtwblV8aSbMJMx9hXJDgmJ4YQO69rQBriLolvkro'
    // Make an API call to the backend to generate a random string
    // For the purpose of this example, we'll just use a mock API call that returns a random string
    const response = await AxiosInstance.post('/record/random-string', {
        amount: '1',
        length: '12'
    });
   
    setRandomString(response.data.result);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Random String</button>
      <input type="text" value={randomString} readOnly />
    </div>
  );
}

export default RandomStringGenerator;