import React from 'react';
import { Component, PureComponent, FunctionalComponent, ReactElement } from './Components/TaskOneComponents';


const App = () => {
  return (
    <div>
      <Component componentName = "React.Component"/>
      <PureComponent />
      <FunctionalComponent />
      <ReactElement />
    </div>
  )
}

export default App;
