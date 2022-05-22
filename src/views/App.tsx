import React, { useState } from 'react';
import { ITasks } from '../types/ITask';
import StudyForm from '../components/StudyForm';
import StudyList from '../components/StudyList';
import StudyCronometer from '../components/StudyCronometer';
import style from '../styles/view.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <div className={style.AppStyle}>
      <StudyForm setTasks={ setTasks }/>
      <StudyList taskList={ tasks }/>
      <StudyCronometer />
    </div>
  );
}

export default App;