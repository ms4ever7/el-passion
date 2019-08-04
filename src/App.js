import React from 'react';
import './styles/app.scss';

import SideBar from './components/SideBar';
import Issues from './components/Issues';

function App() {
  return (
    <div className="app">
      <section className="app__wrapper">
        <SideBar />
        <Issues />
      </section>
    </div>
  );
}

export default App;
