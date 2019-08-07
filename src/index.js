import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Calculator from './Calculator';

const App = () => (
  <div className="container">
    <Calculator />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
