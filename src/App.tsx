import React from 'react';
import SimpleCounter from './Components/SimpleCounter';

export default () => {
  const greetings: string = 'Hello from React and TypeScript!!! - Manualy configured WebPack!!!'
  return (
    <div className='main'>
      <div>{greetings}</div>
      <SimpleCounter />
    </div>
  );
};
