import React, { useState } from 'react';
import AxiosInstance from '../../context/AxiosInstance';
const RandomStringGenerator = ()  => {
  const [randomString, setRandomString] = useState('');

  const handleClick = () => {
    // Make an API call to the backend to generate a random string
    // For the purpose of this example, we'll just use a mock API call that returns a random string
    AxiosInstance.post('/record/random-string', {
        amount: '1',
        length: '12'
    }).then(res => {
        setRandomString(res.data.result);

    });
  };

  return (
    <div className='flex flex-col flex-wrap'>
      <input type="text" value={randomString} readOnly />
      <button className='bg-skin-key-muted text-skin-primary shadow-muted rounded-lg h-auto text-2xl hover:brightness-150 ' onClick={handleClick}>Generate Random String</button>
    </div>
  );
}

export default RandomStringGenerator;