import React, { useState } from 'react';
import { ITasks } from '../types/ITask';
import StudyForm from '../components/StudyForm';
import StudyList from '../components/StudyList';
import StudyCronometer from '../components/StudyCronometer';
import style from '../styles/view.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask : ITasks) {
    setSelected(selectedTask);

    setTasks(oldTasks => oldTasks.map(tasks => (
      {
        ...tasks,
        selected: tasks.id === selectedTask.id? true : false,
      }
    )));

  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <StudyForm setTasks={ setTasks }/>
      <StudyList
        taskList= { tasks }
        selectTask= { selectTask }
      />
      <StudyCronometer
        selected={ selected }
        endTask={ endTask }
        />
    </div>
  );
}

export default App;