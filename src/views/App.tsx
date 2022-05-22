import React from 'react';
import StudyForm from '../components/StudyForm';
import StudyList from '../components/StudyList';
import StudyCronometer from '../components/StudyCronometer';
import style from  '../styles/view.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <StudyForm />
      <StudyList />
      <StudyCronometer />
    </div>
  );
}

export default App;
