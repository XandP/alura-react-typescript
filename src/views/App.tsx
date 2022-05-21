import React from 'react';
import StudyForm from '../components/StudyForm';
import StudyList from '../components/StudyList';
import '../styles/viewStyles.scss';

function App() {
  return (
    <div className="AppStyle">
      <StudyForm />
      <StudyList />
    </div>
  );
}

export default App;
