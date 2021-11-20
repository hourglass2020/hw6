import React from 'react';

import TitleBox from './components/TitleBox';
import NewContactForm from './components/NewContactForm';
import ContactsCards from './components/ContactsCards';

function App() {
  return (
    <div className="App body">
      <TitleBox />
      <br />
      <NewContactForm />
      <br />
      <ContactsCards />
    </div>
  );
}

export default App;
